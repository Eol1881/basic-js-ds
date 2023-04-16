const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;

    this.search = function(node, searchable, expectation) {
      const settings = {
        'boolean' : [true, false],
        'data' : [node.data, null],
        'node' : [node, null]
      };

      if (node.data === searchable) return settings[expectation][0];

      if (searchable < node.data && node.left) {
        return this.search(node.left, searchable, expectation);
      } else if (searchable > node.data && node.right) {
        return this.search(node.right, searchable, expectation);
      } else return settings[expectation][1];
    }
  }

  print(node = this.rootNode, level = 0) {
    if (node !== null) {
      this.print(node.right, level + 1);
      console.log(" ".repeat(level * 4) + `${node.data}`);
      this.print(node.left, level + 1);
    }
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      const node = this.rootNode;
      function findSpotAndAdd(node) {
        if (data < node.data && node.left) {
          findSpotAndAdd(node.left);
        } else if (data < node.data) {
          node.left = new Node(data);
        } else if (data > node.data && node.right) {
          findSpotAndAdd(node.right);
        } else if (data > node.data) {
          node.right = new Node(data);
        }
      }
      return findSpotAndAdd(node);
    }
  }

  has(data) {
    const node = this.rootNode;
    const searchable = data;
    return this.search(node, searchable, 'boolean');
  }

  find(data) {
    const node = this.rootNode;
    const searchable = data;
    return this.search(node, searchable, 'node');
  }

  remove(data) {
    const node = this.rootNode;
    const searchable = data;
    let parentNode = null;
    function findAndRemove(node, searchable, parentNode) {
        // in this complicate case at first we need to check if the right subtree is a leaf
        // if so we just remove it and swap data
        // if the right subtree is not a leaf - we need to find min (leftest) node in the right subtree
        // and remember its parent in order to be able to edit it's links later
      if (!node) return null;
      if (searchable < node.data) {
          return findAndRemove(node.left, searchable, node);
      } else if (searchable > node.data) {
          return findAndRemove(node.right, searchable, node);
      } else {
        if (!node.left && !node.right) {
          if (!parentNode) this.rootNode = null;
          else if (searchable < parentNode.data) parentNode.left = null;
          else parentNode.right = null;
          return null;
        }
        if (!node.left) {
          if (!parentNode) this.rootNode = node.right;
          else if (searchable < parentNode.data) parentNode.left = node.right;
          else parentNode.right = node.right;
          return null;
        }
        if (!node.right) {
          if (!parentNode) this.rootNode = node.left;
          else if (searchable < parentNode.data) parentNode.left = node.left;
          else parentNode.right = node.left;
          return null;
        }
        let parentOfMinNode = node;
        let minNode = node.right;
        while (minNode.left) {
          parentOfMinNode = minNode;
          minNode = minNode.left;
        }

        node.data = minNode.data; // Swap data of the removable node and the min node
        if (node.right === minNode) {
          node.right = minNode.right;
        } else {
          parentOfMinNode.left = minNode.right;
        }
        return null;
      }
    }
    return findAndRemove(node, searchable, parentNode);
  }

  min() {
    const node = this.rootNode;
    function findMin(node) {
      if (node.left) return findMin(node.left);
      else return node.data;
    }
    return findMin(node);
  }

  max() {
    const node = this.rootNode;
    function findMax(node) {
      if (node.right) return findMax(node.right);
      else return node.data;
    }
    return findMax(node);
  }
}

module.exports = {
  BinarySearchTree
};
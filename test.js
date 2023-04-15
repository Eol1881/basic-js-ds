console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

    constructor() {
      this.rootNode = null;
    }

    root() {
      return this.rootNode;
    }

    add(data) {
      if (this.rootNode === null) {
        this.rootNode = new Node(data);
      } else {
        const node = this.rootNode;
        function search(node) {
          if (data < node.data && node.left) {
            search(node.left);
          } else if (data < node.data) {
            node.left = new Node(data);
          } else if (data > node.data && node.right) {
            search(node.right);
          } else if (data > node.data) {
            node.right = new Node(data);
          }
        }
        return search(node);
      }
    }
  
    has(data) {
      const node = this.rootNode;
      const searchable = data;
      function search(node, searchable) {
        if (node.data === searchable) return true;

        if (searchable < node.data && node.left) {
          return search(node.left, searchable);
        } else if (searchable > node.data && node.right) {
          return search(node.right, searchable);
        } else return false;
      }
      return search(node, searchable); // 8(r) - 5 - 15    looking for 6
    }
  
    find(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    remove(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    min() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    max() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
}


    let tree = new BinarySearchTree();
    console.log(tree);
    tree.add(8);
    //tree.add(9)
    //tree.add(7)
    tree.add(5)
    tree.add(15)
    console.log(tree);

    console.log('xxxxxxxxx', tree.has(5))
    console.log('xxxxxxxxx', tree.has(6))
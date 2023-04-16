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

  search(node, searchable, expectation) {
    console.log('!!!!!!!!!!!!', searchable, expectation);

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
    return this.search(node, searchable, 'boolean');
  }

  find(data) {
    const node = this.rootNode;
    const searchable = data;

    function search(node, searchable) {
      if (node.data === searchable) return node;
      if (searchable < node.data && node.left) {
        return search(node.left, searchable);
      } else if (searchable > node.data && node.right) {
        return search(node.right, searchable);
      } else return null;
    }
    return search(node, searchable);
  }

  remove(data) {
    const node = this.rootNode;
    const searchable = data;
    let parentNode = node;

    function search(node, searchable, parentNode) {
      //console.log('current node:', node, 'parent node:', parentNode);
      if (node.data === searchable && !node.left && !node.right) {
        node.data < parentNode.data ? parentNode.left = null : parentNode.right = null;
        return null;
      } else if (node.data === searchable && node.left && !node.right) {
        parentNode.left = node.left;
        return null;
      } else if (node.data === searchable && !node.left && node.right) {
        parentNode.right = node.right;
        return null;
      } else if (node.data === searchable && node.left && node.right) {
        // in this case we need to find min (leftest) node in right subtree first
        
      }

      if (searchable < node.data && node.left) {
        parentNode = node;
        return search(node.left, searchable, parentNode);
      } else if (searchable > node.data && node.right) {
        parentNode = node;
        return search(node.right, searchable, parentNode);
      } else return null;
    }
    return search(node, searchable);
  }

  min() {
    const node = this.rootNode;
    let min = node.data || null;
    function search(node) {
      if (node.left) return search(node.left);
      else return node.data;
    }
    return search(node);
  }

  max() {
    const node = this.rootNode;
    let min = node.data || null;
    function search(node) {
      if (node.right) return search(node.right);
      else return node.data;
    }
    return search(node);
  }
}


    let tree = new BinarySearchTree();
    //console.log(tree);
    tree.add(8);
    tree.add(9)
    tree.add(10)
    tree.add(7)
    tree.add(6)
    console.log(tree);

    console.log('has 5?', tree.has(5))
    console.log('has 6?', tree.has(6))

    //console.log('min -', tree.min())
    //console.log('max -', tree.max())

    //console.log('find 5 -', tree.find(5));
    //console.log('find 6 -', tree.find(6));

    // tree.remove(7);
    // console.log(tree);
function LinkedList(node) {
  this.head = node;
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
}

function Node(element) {
  this.element = element;
  this.next = null;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    if (!currentNode.next) {
      break;
    } else {
      currentNode = currentNode.next;
    }
  }
  return currentNode;
}

function findPrevious(item) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }

  return currentNode;
}

function insert(element, item) {
  const newNode = new Node(element);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function remove(item) {
  const node = this.findPrevious(item);
  if (node.next !== null) {
    node.next = node.next.next;
  }
}

function display() {
  let currentNode = this.head;
  while (currentNode !== null) {
    console.log("element : ", currentNode.element);
    if (currentNode.next) {
      console.log("next : ", currentNode.next.element);
    } else {
      console.log("next : null");
    }
    currentNode = currentNode.next;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;

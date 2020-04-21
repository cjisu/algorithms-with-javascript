/**
 * 중복 없애기
 *
 * 정렬되어 있지 않은 연결리스타가 주어졌을 때 중복 원소 제거
 *
 */

const { LinkedList, Node } = require("./linked_list.js");

function deleteDups(list) {
  const hashSet = [];
  let current = list.head;
  let previous = list.head;

  while (current !== null) {
    if (hashSet[current.element] === undefined) {
      hashSet[current.element] = true;
      previous = current;
    } else {
      previous.next = current.next;
    }

    current = current.next;
  }
}

const list = new LinkedList(new Node(1));

list.insert(2);
list.insert(3);
list.insert(2);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(2);
list.insert(4);
list.insert(4);
list.insert(5);
deleteDups(list);
console.log("--------");
list.display();

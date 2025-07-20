"use strict";
// build a linked list datastructure
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    length = 0;
    tail;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    printLinkedList() {
        let temp = this.root;
        while (temp) {
            console.log(temp?.value);
            temp = temp?.next;
        }
    }
}
const numberList = new LinkedList();
const nameList = new LinkedList();
const linkedList = new LinkedList;
linkedList.add(2);
linkedList.add(5);
linkedList.add(1);
linkedList.add(3);
linkedList.printLinkedList();

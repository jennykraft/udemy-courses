// build a linked list datastructure

class ListNode<T> {
    next?: ListNode<T>;
    constructor(public value: T) {

    }
}

class LinkedList<T> {
    private root?: ListNode<T>;
    private length = 0;
    private tail?: ListNode<T>;

    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
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

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();

const linkedList = new LinkedList<number>;
linkedList.add(2);
linkedList.add(5);
linkedList.add(1);
linkedList.add(3);
linkedList.printLinkedList();

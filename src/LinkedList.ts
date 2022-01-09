import { Sorter } from './Sorter';

class LinkedListNode {
    next: LinkedListNode | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: LinkedListNode | null = null;

    get length(): number {
        if (!this.head) return 0;

        let counter = 1;
        let tail = this.head;

        while(tail.next) {
            counter++;
            tail = tail.next;
        }

        return counter;
    }

    add(data: number): void {
        const node = new LinkedListNode(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    at(index: number): LinkedListNode {
        if (!this.head) {
            throw new Error('Index is out of bounds!');
        }
        
        let counter = 0;
        let node: LinkedListNode | null = this.head;

        while(node) {
            if (counter === index) return node;

            counter++;
            node = node.next;
        }

        throw new Error('Index is out of bounds!');
    };

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty!')
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };

    swap(leftIndex: number, rightIndex: number):void {
        const nodeAtLeftIndex  = this.at(leftIndex);
        const nodeAtRightIndex = this.at(rightIndex);
        [nodeAtLeftIndex.data, nodeAtRightIndex.data] = [nodeAtRightIndex.data, nodeAtLeftIndex.data];
    };

    print(): void {
        if (!this.head) return;

        let node: LinkedListNode | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next
        }
    }
}
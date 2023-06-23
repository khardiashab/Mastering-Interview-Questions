class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.pervious = null;
  }
}
class DoublyLinkedList {
  head;
  tail;
  length;
    constructor(value){
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
    }

    append(value){
      let newNode = new Node(value);
      let currentNode = this.head;
      while(currentNode !== this.tail){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.pervious = currentNode;
      this.tail =newNode;
      this.length++;
    }

    perpend(value){
      let newNode = new Node(value)
      newNode.next = this.head;
      this.head.pervious = newNode;
      this.head = newNode;
      this.length++;
    }

    print(){
      let currentNode = this.head;
      let arr = [];
      while(currentNode !== this.tail){
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      arr.push(currentNode.value);
      console.log(arr);
    }
    
    deleteNode (value){
      let currentNode = this.head;
      while(currentNode !== this.tail && currentNode.value !== value){
        currentNode = currentNode.next;
      }
      if(currentNode.value === value){
        // if it tail 
        if(currentNode === this.tail){
          let previousNode= currentNode.pervious;
          previousNode.next = null;
          this.tail = previousNode
          return ;
        }
        // if it is head
        if(currentNode === this.head){
          let nextNode = currentNode.next;
          nextNode.pervious = null;
          this.head = nextNode;
          return;
        }
        let previousNode = currentNode.pervious;
        let nextNode = currentNode.next ;
        previousNode.next = nextNode;
        nextNode.pervious = previousNode;
        return;
      }else{
        throw Error("Item is not in List.")
      }
    }
}

let dll = new DoublyLinkedList(5);
dll.append(4);
dll.print();
dll.perpend(3);
dll.perpend(32);
dll.perpend(34);
dll.perpend(31);
dll.print();
dll.deleteNode(5);
dll.print();
dll.deleteNode(4);
dll.print();
dll.deleteNode(31);
dll.print();
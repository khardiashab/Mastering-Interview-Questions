class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value){
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  remove(value){
    if(this.length === 1 ){
      throw Error("You cannot delete now.")
    }
    // If we want to remove head.
    if(this.head.value === value){
      this.head == this.head.next;
      this.length++;
      return this.printList();
    }
    let perivousItem = this.head;
    let varItem = perivousItem.next
    while(varItem !== this.tail && varItem.value !== value){
      perivousItem = varItem;
      varItem = varItem.next;
    }
    if(varItem.value === value){
      if(varItem === this.tail){
        perivousItem.next = null;
      }else{
        // we have to delete this item
        perivousItem.next = varItem.next;
        this.length--;
      }
    }
  }

  insert(ind, value){
    let newNode = new Node(value);
    let currentNode = this.head;
    for(let i =0; i< ind; i++){
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode = newNode;
    this.length++;
    return this.printList()
  }
  printList(){
    let str = []
    let currentNode = this.head;
    while(currentNode !== null){
      str.push( currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(str)
  }
  reverse(){
    // 
    if(this.length >1){
      let periviousNode = this.head;
      let currentNode = periviousNode.next;
      periviousNode.next = null;
      let tail = periviousNode;

      while(currentNode !== this.tail){
        let nextNode = currentNode.next;
        // let me define currentnode.next to perivious node 
        currentNode.next = periviousNode;
        periviousNode = currentNode;
        currentNode = nextNode;
      }
      currentNode.next = periviousNode;
      this.head = currentNode;
      this.tail =  tail;
      this.printList()
    }
  }
}

const ll = new LinkedList(4);
ll.append(2);
ll.append(1);
ll.prepend(5);
ll.prepend(3);
ll.prepend(11);
ll.prepend(33);
ll.insert(2, 55);
// ll.printList()
ll.remove(5);
// ll.printList();
ll.reverse()

export default LinkedList;
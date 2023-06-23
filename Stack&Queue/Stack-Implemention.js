class Stack {
  constructor(size){
    this.data = new Array(size);
    this.size = size;
  }

  push(item){
    if(this.size >= this.data.length){
      throw Error("Stack is full.")
    }
    this.data.push(item);
    return;
  }

  pop(){
    if(this.data.length === 0){
      throw Error("Stack is empty.")
    }
    return this.data.pop();
  }

  isFull(){
    if(this.data.length === this.size){
      return true;
    } 
    return false;
  }

  isEmpty(){
    if(this.data.length === 0){
      return true;
    }
    return false;
  }
}
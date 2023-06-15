class MYArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  push(item){
    this.data[this.length] = item;
    this.length ++;
  }
  pop(){
    let popItem = this.data[this.length -1]
    delete this.data[this.length -1] ;
    this.length --;
    return popItem
  }

  getByIndex(ind){
    if(ind < this.length){
      return this.data[ind]
    }
    else return undefined
  }

  getIndexOfItem(item){
    for( let ind in this.data){
      if(item === this.data[ind]){
        return Number(ind);
      }
    }
    return -1;
  }

  deleteItemByIndex(ind){
    console.log(typeof ind)
    if(ind < this.length){
      for(let i = ind; i < this.length; i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    } else {
      throw Error("This index is not in MyArray.")
    }
  }
  deleteItem(item){
    let ind = this.getIndexOfItem(item);
    if(ind === -1){
      throw Error("This item in not in Array.")
    } else {
      this.deleteItemByIndex(ind)
      return ;
    }
  }
}


const arr = new MYArray();
arr.push(5)
arr.push(4)
arr.push(5)
arr.push(3)
arr.push(1)
// arr.pop()
// arr.deleteItemByIndex(3)
console.log(arr.getIndexOfItem(1))
console.log(arr.getIndexOfItem(0))
console.log(arr.getByIndex(2))
console.log(arr)
arr.deleteItem(4)

console.log(arr)
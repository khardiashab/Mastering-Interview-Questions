Array.prototype.moveZeroAtEnd = function(){
  let idx = 0; // index for non zero elements 
  this.forEach(item => {
    if(item !== 0){
      this[idx] = item;
      idx++;
    }
  })
  for(let i = idx; i< this.length; i++){
    this[i] = 0;
  }
}
const arr = [1,0, 1, 2,3, 0, 0, 0, 4, 5];
arr.moveZeroAtEnd();
console.log(arr)
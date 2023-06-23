Array.prototype.isSorted = function(){
  console.log(this)
  for(let i = 1; i < this.length; i ++){
    if(this[i-1] > this[i]){
      return false;
    }
  }
  return true;
}
const arr = new Array(1,2,2,3,4,5,6);
const arr2 = [1,2,3,3,2,4,5];
console.log(arr.isSorted());
console.log(arr2.isSorted());
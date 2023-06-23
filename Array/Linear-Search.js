Array.prototype.linearSearch = function(item){
for(let i=0; i<this.length; i++){
  if(this[i] === item){
    return i;
  }
}
return -1
}

const arr = [2,3, 5, 6, 8, 9,3,0];
console.log(arr.linearSearch(1))
console.log(arr.linearSearch(9))
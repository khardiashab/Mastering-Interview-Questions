Array.prototype.secondLargestElement = function(){
  // brute force approch 
  // step 1 sort 
  // step 2 getting second largest 
  this.sort();
  const largestElement = this[0];
  const len = this.length;
  for(let i = len - 2; i >=0; i--){
    if(this[i] == largestElement){

    } else return this[i];
  }
  return -1;
}

Array.prototype.secondLargestElementByOptimal = function(){
  let largestElement = this[0];
  let secondLargestElement = -Infinity;
  const len = this.length;
  for(let i = 1; i < len ; i++){
    if(largestElement < this[i]){
      secondLargestElement = largestElement;
      largestElement = this[i];
    }

  }
  if(secondLargestElement === - Infinity){
    secondLargestElement = undefined;
  }
  return secondLargestElement;
}

const arr = new Array(1, 2,2, 5, 6,2,3,4);
console.log(arr)
console.log(arr.secondLargestElement());
console.log(arr.secondLargestElementByOptimal());
/**
 * there is an array given where every element is give twice and one element
 * is given once return that element
 */

function missingNumber(arr){
const set = new Set(arr);
let sumSet = 0;
set.forEach(item=>{
  sumSet += item;
})

sumSet = 2 * sumSet;
let sumArr = arr.redcue((sum,item)=>{return sum+item;}, 0)
return sumSet- sumArr;
}

/**
 * time complexity = O(n^2)
 * space complexity = O(n)
 */

function bruteForceApproach(arr){
  for(let i= 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){
      if(i !== j && arr[i] === arr[j]){
        count++;
        break;
      }
    }
    if(!count){
      return arr[i];
    }
  }
}
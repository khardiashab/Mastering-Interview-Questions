// Problem find out the missing number in sorted array where
/**
 * example a = [1,2,3,5], N = 5;  array have unique element 
 * and array.length = N-1;
 * ans = 4, 
 */

const missingNumber = (arr, N)=>{
  for(let i = 1; i <= N; i++){
    if(arr.indexOf(i) === -1){
      return i;
    }
  }
}
/**
 * Time complexity is O(N^2)
 * To lower the time complexity we can do by sorting the array
 */


let arr = [1,2,4,5,3, 7,9,8]; 
console.log(missingNumber(arr, 9))
console.log(missingNumber2(arr, 9))
console.log(missingNumberWithSortedArray(arr, 9))
console.log(optimalSolution(arr, 9))




function missingNumberWithSortedArray(arr, N){
  arr.sort();
  for(let i=0; i < N-1; i++){
    if(i+1 !== arr[i]){
      return i+1;
    }
  }
}
/**
 * time complexity for this O(NlongN) + o(N) = O(NlogN)
 * space complexity O(1)
 * let more optimize it 
 */

function missingNumber2(arr, N){
  let zeros = new Array(N+1).fill(0);
  arr.forEach(element => {
    zeros[element] = 1;
  });
  return zeros.lastIndexOf(0);
}

/**
 * time complexity O(N) + O(N) = O(N)
 * spaceComplexity O(N+1)
 */

function optimalSolution(arr, N){
  let sum = (N * (N+1))/2;
  let arrSum = arr.reduce((sum, item)=>{
    return sum +item;
  }, 0)
  return sum - arrSum;
}



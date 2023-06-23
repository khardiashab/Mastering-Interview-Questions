const rotateSortedArrayByKPlace = (arr,k)=>{
  // this is rotation is on right side
  let leftArr = arr.slice(0, arr.length - k);
  let rightArr = arr.slice(arr.length -k);
  // leftArr.reverse();
  // rightArr.reverse();
  
  return rightArr.concat(leftArr);
}
const arr = [1,2,3,4,5,6,7,8,8];
console.warn(rotateSortedArrayByKPlace(arr, 3));

const reverseArrayKElements = (arr,startIdx, endIdx)=>{
  let mid = Math.ceil((startIdx + endIdx) / 2)
  for(let i = 0; i < mid - startIdx; i++){
    let temp = arr[i + startIdx];
    arr[i+ startIdx] = arr[endIdx - i];
    arr[endIdx- i] = temp;
  }
}
console.log(arr);
reverseArrayKElements(arr, 2, 3);
console.log(arr);

const rotateSortedArrayByKPlaceInLeftDirectionOptimal = (arr, k)=>{
  k = k % arr.length;
  // reverse the left part of the array 
  reverseArrayKElements(arr, 0, k-1);
  reverseArrayKElements(arr, k, arr.length - 1);
  reverseArrayKElements(arr, 0, arr.length -1)
}


rotateSortedArrayByKPlaceInLeftDirectionOptimal(arr, 3);
console.log(arr)
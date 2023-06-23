const intersectionOfSortedArray = (arr1, arr2)=>{
  // first make a set from one 
  // get index of  from the second array
  let ans = [];
  arr1.forEach(item =>{
    if(arr2.indexOf(item) !== -1 ){
      if(!ans.length){
        ans.push(item);
      }
      if(ans[ans.length -1] !== item){
        ans.push(item);
      }
    }
  })
  return ans;
} 
/**
 * Time complexite O(n^2)
 * space complexity O(n) for answer array
 */



let arr1 = [1,1,2,3,5,8,90];
let arr2 = [1, 5, 7];
console.log(intersectionOfSortedArray(arr1, arr2))
console.log(intersectionOfSortedArray(arr1, arr2))
console.log(intersectionOfSortedArrayWithTwoPointer(arr1, arr2))

function intersectionOfSortedArrayWithTwoPointer(arr1, arr2){
  let i =0 , j= 0, len1= arr1.length, len2=arr2.length, ans = [];
  while(i< len1 && j < len2){
    if(arr1[i] < arr2[j]){
      i++;
    } else if( arr1[i] > arr2[j]){
      j++;
    } else {
      if(!ans.length){
        ans.push(arr1[i]);
      } else {
        if(ans[ans.length - 1 ] !== arr1[i]){
          ans.push(arr1[i]);
        }
      }
      i++; j++;
    }
  }
  return ans;
}
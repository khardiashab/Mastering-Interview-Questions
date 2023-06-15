const MergeSortedArray = (arr1, arr2)=> {
  if(!arr2){
    return arr1;
  }
  if(!arr1){
    return arr2;
  }
  const ansArray = [];
  let i = 0, j= 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  while(i<len1 || j < len2){
    if(arr1[i] <= arr2[j]){
      ansArray.push(arr1[i]);
      i++;
    } else {
      ansArray.push(arr2[j]);
      j++;
    }
  }
  if( i === len1 ){
    while(j < len2){
      ansArray.push(arr2[j]);
      j++;
    }
  } else {
    while(i < len1){
      ansArray.push(arr1[i]);
      i++;
    }
  }

  return ansArray
}


const arr1 = [3, 4, 7, 19];
const arr2 = [0, 5, 10 , 11, 19, 20]
console.log(MergeSortedArray(arr1, arr2))
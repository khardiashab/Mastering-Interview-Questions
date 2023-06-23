const unionOfSortedArray = function(arr1, arr2){
  const ans = [];
  arr1.forEach(element => {
    if(ans.indexOf(element) === -1){
      ans.push(element)
    }
  });
  // O(n^2)
  arr2.forEach(element => {
    if(ans.indexOf(element) === -1){
      ans.push(element)
    }
  });
  return ans;
}

const arr1 = [2,2,3,4,5, 6, 7];
const arr2 = [1,2,3,4,8,9];
console.log(unionOfSortedArray(arr1,arr2))
console.log(unionOfSortedArrayBySet(arr1,arr2))
console.log(unionOfSortedArrayByTwoPointer(arr1,arr2))

function unionOfSortedArrayBySet(arr1, arr2){
  let ans = new Set(arr1.concat(arr2));
  return Array.from(ans)
}

function unionOfSortedArrayByTwoPointer(arr1, arr2){
  let i = 0, j=0, idx=0, ans=[arr1[0] < arr2[0] ? arr1[0] : arr2[0]];
  while(i< arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j] ){
      if( ans[idx]!== arr1[i]){
        ans.push(arr1[i]);
        idx++;
      }
      i++;
    } else if(arr1[i] > arr2[j]){
      if( ans[idx]!== arr2[j]){
        ans.push(arr2[j]);
        idx++;
      }
      j++;
    } else {
      if( ans[idx]!== arr2[j]){
        ans.push(arr2[j]);
        idx++;
      }
      i++;j++; 
    }
  }

  while(i < arr1.length){
    if( ans[idx]!== arr1[i]){
      ans.push(arr1[i]);
    }
    i++;
    idx++;
  }
  while(j < arr2.length){
    if( ans[idx]!== arr2[j]){
      ans.push(arr2[j]);
    }
    j++;
    idx++;
  }
  return ans;
}



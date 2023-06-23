const removeDublicatesItemInPlace = (arr)=>{
  // brute force first array is sorted 
  let set = new Set(arr);
  let i =0;
  set.forEach(item => {
    arr[i] = item;
    i++;
  })
}


const removeDuplicateInPlaceInArray = (arr)=>{
  let uniqueItem  = arr[0];
  let idx = 1;
  for(let i = idx; i < arr.length; i++){
    if(uniqueItem === arr[i]){
    } else {
      uniqueItem = arr[i];
      arr[idx] = uniqueItem;
      idx++;
    }
  }
}

const arr= [1,1,2,2,2, 3, 5];
const arr2= [1,1,2,2,2, 3, 5];
removeDublicatesItemInPlace(arr);
removeDuplicateInPlaceInArray(arr2)
console.log(arr);
console.log(arr2);
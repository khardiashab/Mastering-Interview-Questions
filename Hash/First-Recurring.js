// statement : In array write a function that return the first retrun the 
// frist recurring element 
// if all element are unique return unique
// example : 
const arr1 = [2,1,3,4,2,3,3,4] // return 2
const arr2 = [2, 1,1, 3, 3, 2] // return 1
const arr3 = [1,3,4,5] // return undefined

const FirstRecurringElementInArray = (arr)=>{
  let obj = new Set();
  for(let i of arr){
    if(obj.has(i)){
      return i;
    } else {
      obj.add(i)
    }
  }
}

console.log(FirstRecurringElementInArray(arr1))
console.log(FirstRecurringElementInArray(arr2))
console.log(FirstRecurringElementInArray(arr3))
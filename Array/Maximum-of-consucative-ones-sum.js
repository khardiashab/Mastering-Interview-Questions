/**
 * there is an array of zero and one; check the maximum consucative ones count
 * a = [1,1,0,0,1,1,1,1,0,1] ans = 4
 */

const maxConsucativeSum =(arr)=>{
  let sum =0;
  let max = 0;
  arr.forEach(item => {
    if(item === 0){
      max = max > sum ? max : sum;
      sum = 0;
    } else{
      sum++;
    } 
  });
  return max;
}

const a = [1,1,0,0,1,1,1,1,0,1];

console.log(maxConsucativeSum(a))
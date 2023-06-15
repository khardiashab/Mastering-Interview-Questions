const ReverseStringByLooping = (str)=>{
  if(!str || str.length < 2 || typeof str !== "string"){
    throw Error("Provide a valid String.")
  }
  let strArr = str.split("");
  const len = strArr.length
  for(let i = 0; i < len/ 2 ; i ++){
    let item = strArr[i];
    strArr[i] = strArr[len - 1 -i];
    strArr[len -1 -i] = item
  }
  return strArr.join("")
}

const ReverseString = (str) =>{
  if(!str || str.length < 2 || typeof str !== "string" ){
    throw Error(
      "Enter a valid string."
    )
  }
  return str.split("").reverse().join("")
}

const str = "My name is Ajay.";
console.log(ReverseStringByLooping(str))
console.log(ReverseString(str))
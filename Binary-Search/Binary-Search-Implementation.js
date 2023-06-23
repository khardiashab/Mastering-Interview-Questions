class BinarySearch{
  static  recursion(A, i, l, key){
    if(i >= l){
      return -1;
    }
    
    let mid = Math.floor((i+l)/2);
    if(A[mid] === key) {
      return mid;
    }
    else if(A[mid] > key){
      // left side Binary search
      this.recursion(A, i, mid, key);
    } else this.recursion(A, mid+1, l, key);
    }
  static Search(A, key){
    console.log(this.recursion)
    return this.recursion(A, 0, A.length -1, key);
  }

  
}

const a = [1,2,3,4,5,6,7,8]
console.log(BinarySearch.Search(a,0));
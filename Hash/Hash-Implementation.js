class Hash {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  setItem(key, value) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  getItem(key) {
    const address = this._hash(key)
    const currentBuket = this.data[address]
    if (currentBuket?.length) {
      for (let item of currentBuket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return null;
  }

  keys(){
    const keysArray = [];
    for(let buket of this.data){
      if(!!buket){
        for( let item of buket){
          keysArray.push(item[0])
        }
      }
    }
    return keysArray;
  }
}

const newHash = new Hash(50);
newHash.setItem("grapes", 100)
newHash.setItem("honda", 200)
newHash.setItem("monkey", 200)
newHash.setItem("monkey", 200)
console.log(newHash.getItem("grapes"))
console.log(newHash.keys())

console.log(newHash)
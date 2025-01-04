class HashMap {
  constructor(loadFactor = 7.5, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    for (let element of bucket) {
      if (element[0] === key) {
        element[1] = value;
        return;
      }
    }
    this.size++;
    bucket.push([key, value]);
    if (this.capacity * 0.8 < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.buckets.push([]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    for (let element of bucket) {
      if (element[0] === key) {
        return element[1];
      }
    }
    return null;
  }
  has(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    for (let element of bucket) {
      if (element[0] === key) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    let elementNum = 0;
    for (let element of bucket) {
      if (element[0] === key) {
        bucket.splice(elementNum, 1);
        return true;
      }
      elementNum++;
    }
    return false;
  }
  length() {
    let length = 0;
    for (let bucket of this.buckets) {
      for (let element of bucket) {
        if (element !== null) {
          length++;
        }
      }
    }
    return length;
  }
  clear() {
    for (let bucket of this.buckets) {
      if (bucket) {
        bucket.length = 0;
      }
    }
  }
  keys() {
    let keys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let element of bucket) {
          keys.push(element[0]);
        }
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let element of bucket) {
          values.push(element[1]);
        }
      }
    }
    return values;
  }
  entries() {
    let tempBuckets = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let element of bucket) {
          tempBuckets.push(element);
        }
      }
    }
    return tempBuckets;
  }
}

const hashMap = new HashMap();
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("human", "toshi");
console.log(hashMap.buckets);

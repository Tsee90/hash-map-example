import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = this.createBuckets(this.capacity);
  }

  createBuckets(value) {
    let result = [];
    for (let i = 0; i < value; i++) {
      result[i] = new LinkedList();
    }
    return result;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const obj = { key, value };
    const hashKey = this.hash(key);
    const check = this.checkBucket(key);
    if (!check) {
      this.buckets[hashKey].append(obj);
    } else {
      this.buckets[hashKey].replace(check.item, check.index);
    }
  }

  checkBucket(key) {
    const hashKey = this.hash(key);
    const list = this.buckets[hashKey].getAllValues();
    let result = false;
    if (list === null) {
      return null;
    }

    list.forEach((item, index) => {
      if (item.key === key) {
        result = { item, index };
      }
    });

    return result;
  }

  get(key) {
    const check = this.checkBucket(key);
    if (!check) {
      return null;
    }
    return check.item.value;
  }

  has(key) {
    const check = this.checkBucket(key);
    if (check) {
      return true;
    }
    return false;
  }

  remove(key) {
    const check = this.checkBucket(key);
    if (check) {
      this.buckets[this.hash(key)].removeAt(check.index);
      return true;
    }
    return false;
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.capacity; i++) {
      length += this.buckets[i].getSize();
    }
    return length;
  }

  clear() {
    this.capacity = 16;
    this.buckets = this.createBuckets(this.capacity);
  }

  keys() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i].getAllValues();
      list.forEach((item) => {
        result.push(item.key);
      });
    }
    return result;
  }

  value() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i].getAllValues();
      list.forEach((item) => {
        result.push(item.value);
      });
    }
    return result;
  }

  entries() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      const list = this.buckets[i].getAllValues();
      list.forEach((item) => {
        result.push([item.key, item.value]);
      });
    }
    return result;
  }
}

const hashMap = new HashMap();

hashMap.set('hello', 'hi');
hashMap.set('hello', 'not hi');

console.log(hashMap.entries());

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  #createNode(value = null) {
    return { value, nextNode: null };
  }

  getTail() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current;
    }
  }

  getHead() {
    return this.head;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const newNode = this.#createNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.getTail().nextNode = newNode;
    }
    this.size += 1;
  }

  prepend(value) {
    const newNode = this.#createNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }

  getAllValues() {
    if (this.head === null) {
      return null;
    }
    let values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.nextNode;
    }
    return values;
  }

  replace(value, index) {
    const node = this.at(index);
    if (node !== null) {
      node.value = value;
    }
  }

  at(index) {
    if (
      Number.isInteger(index) &&
      index >= 0 &&
      this.head !== null &&
      index < this.size
    ) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    } else {
      return null;
    }
  }

  pop() {
    if (this.head !== null && this.size !== 1) {
      this.at(this.size - 2).nextNode = null;
      this.size -= 1;
    } else if (this.size === 1) {
      this.head = null;
      this.size -= 1;
    } else {
      return null;
    }
  }

  find(value) {
    let current = this.head;
    let index = 0;
    let found = false;
    while (current !== null && !found) {
      if (current.value === value) {
        found = true;
      } else {
        index += 1;
        current = current.nextNode;
      }
    }
    if (found) {
      return index;
    } else {
      return null;
    }
  }

  contains(value) {
    if (this.find(value) !== null) {
      return true;
    }
    return false;
  }

  toString() {
    if (this.head !== null) {
      let current = this.head;
      let string = ``;
      while (current !== null) {
        string += `( ${current.value} ) -> `;
        current = current.nextNode;
      }

      return `${string}null`;
    } else {
      return null;
    }
  }

  insertAt(value, index) {
    const before = this.at(index - 1);
    if (index === 0) {
      this.prepend(value);
    } else if (index > 0 && before !== null) {
      const newNode = this.#createNode(value);
      const after = this.at(index);
      before.nextNode = newNode;
      newNode.nextNode = after;
      this.size += 1;
    } else {
      throw new Error(
        `index: '${index}' is invalid: function insertAt(value, index)`
      );
    }
  }

  removeAt(index) {
    const toRemove = this.at(index);
    if (toRemove === null) {
      throw new Error(`index: ${index} is invalid: removeAt(index)`);
    } else if (index === 0) {
      this.head = this.head.nextNode;
      this.size -= 1;
    } else {
      const before = this.at(index - 1);
      const after = this.at(index + 1);
      before.nextNode = after;
      this.size -= 1;
    }
  }
}

export default LinkedList;

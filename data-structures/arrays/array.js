export class Arr {
    length = 0;
    data = {}

    constructor(...args) {
      this.length = args.length;
      for(const key in args) {
        this.data[key] = args[key]
      }
    }


    size(){
      return this.length;
    }

    push (item) {
      this.data[this.length] = item;
      this.length ++;
      return this.length;
    }

    at(index) {
      return this.data[index];
    }

    concat(...items) {
      let iterator = this.length;
      for(const key in items) {
        this.data[iterator++] = items[key]
      }
      this.length = iterator;
      return this.data
    }

    includes(item) {
      let flag  = false;
      for(const key in this.data){
        if(item === this.data[key]) {
          flag = true;
          break;
        }

      }
      return flag;
    }

    indexOf(item) {
      let index  = -1;
      for(const key in this.data){
        if(item === this.data[key]) {
          index = key;
          break;
        }

      }
      return index;
    }


    pop() {
      const element = this.data[this.length-1]
      delete this.data[this.length-1];
      this.length-- ;
      return element;
    }

    reverse() {
      let reverse = {}; 
      let arrayLength = this.length-1;
      
      for(const key in this.data) {
        reverse[arrayLength--] = this.data[key]
      }

      return reverse;
    }

    isEmpty() {
      return this.length === 0;
    }

    /**
     * 
     * moving the element from last postion to position+1
     * 
     * [1, 2, 5, 6]
     * insert(2,4)
     * 
     * [1, 2, 4, 5, 6]
     * @param {*} item 
     * @returns 
     */
    insert(index,item) {
      for(let i = this.length; i>=index ; i--) {
        this.data[i] = this.data[i-1]
      }

      this.data[index] = item;
      this.length ++;
      return this.data;
    }


    prepend(item) {
      return this.insert(0, item)
    }

    delete(index) {
      const element = this.data[index];
      for(let i=index; i<this.length - 1;i++) {
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length - 1];
      this.length--;
      return element;
    }


    deleteAll(item) {
      let index = 0;
      for (const key in this.data) {
          if (this.data[key] === item) continue;
          this.data[index] = this.data[key]
          index++;
      }
      for (let i = index; i < this.length; i++) {
          delete this.data[i]
      }
      this.length = index;
      return this.data;
    }


    display() {
      return this.data
    }


    
}
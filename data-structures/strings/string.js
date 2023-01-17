import { Arr } from "../arrays/array.js";

export class Str extends Arr {

  length = 0;
  data = {};
  
  constructor(...args) {
    this.length = args.length;
    for(const key in args) {
      this.data[key] = args[key]
    }
  }

}
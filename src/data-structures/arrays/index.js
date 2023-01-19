import { Arr } from "./array";


const arr = new Arr(1,3,4,5, 6, 8, 9)

console.info(`size: ${arr.size()}`)
console.log( `at ${arr.at(0)}`)
console.log(`push ${arr.push(10)}`)
console.log(`includes ${arr.includes(11)}`)
console.log('concat',arr.concat(11,14))
console.log('reverse', arr.reverse())
console.log('indexof', arr.indexOf(9))
console.log('pop', arr.pop())
console.log('size', arr.size())
console.log('isEmpty', arr.isEmpty())
console.log('insert', arr.insert(4, 20));

console.log('prepend', arr.prepend(21));

console.log('delete', arr.delete(1) );

console.log('display', arr.display());

console.log('concat', arr.concat(11,11, 11));
console.log('deleteAll', arr.deleteAll(11))

console.log('display', arr.display());
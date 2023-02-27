 const bottle = {name: 'Jahid', age:23, hairColor:'brown', isStudent: true };
 const keys = Object.keys(bottle);
//  console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);
// console.log(bottle);
// Object.seal(bottle)
Object.freeze(bottle)
bottle.age=34;
bottle.height=45
delete bottle.isStudent;
// console.log(bottle);



 
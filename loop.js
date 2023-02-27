const numbers =[12,34,233,45,67,12,23,45];
for (const number of numbers){
    // console.log(number);
};
////// for of can not use object element/////
const bottle = {name: 'Jahid', age:23, hairColor:'brown', isStudent: true };

///// 3ways to read object properties ////
// 1. bottle.name-- dot notation 
/// 2.bottle.["color"];
////3.bottle.[key]

const keys = Object.keys(bottle);
 for (const key of keys){
    // console.log(key, bottle[key]);
 };
   //// for in use object element////
   for (const key in bottle){
    const value = bottle[key];
    // console.log(key,value)
   }

   const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
// console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 
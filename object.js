 ///// create object using object literals /////

 const player ={};
 player.name ='Jahid Rayhan';
 player.fullname ='jahid rayhan rupo';
 player.job = 'bekar';
 player.top = function (){
    console.log('top players console log');
 }
 player.top();
//  console.log(player);
const person ={name:'rupo'}

 ///// object constructor /////
 const persons =  new Object ();
//  console.log(persons);


 ////object create method ////

 const item =  Object.create (person);
//  console.log(item);

// class ///
class profile {
    name = 'rupo';
    job= 'bekar';

    constructor(age){
        this.age =age;
    }


}
const person1 =new profile(25);
console.log(person1);
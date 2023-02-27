// const num1= {a:34};
// const num2 = {a:34};
//  const num3= num2
// if(num3===num2){
//   console.log('same value');
// }
// else {
//     console.log('not same');
// }


//// donot use proper system for object or loop///

const num1= {a:34,b:34,c:44};
const num2 = {a:34,b:34,c:44};
//  const string1= JSON.stringify(num1);
//  const string2 = JSON.stringify(num2);
//  if ( string1=== string2){
//     console.log('same')
//  }
//  else {
//     console.log('different');
//  }
 function compare (first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second)
    if(firstKeys.length=== secondKeys.length){
      for (const ke of firstKeys){
        if (first[ke]!== second[ke]){
            return false
        }
      }
      return true
    }
    else{
        return false;
    }
 }
const output = compare(num1,num2);
console.log(output);
const student ={
    name:'jahid rayhan ',
    money:5000,
    study: 'math',
    subjects:['calculus', "alegbra", "geometry"],
    exam: function (){
        return `${this.name} on particating a exam`
    },
    improveExam: function (subject){
        this.exam();
        return `${this.name} is taking improvement ${subject}` 

    },
    treatDe : function (amount,tips){
        this.money = this.money - amount - tips;
        return this.money ;
    }
}
 const output =student.exam();
//  console.log(output);  
  const reExam = student.improveExam('calculus');
//   console.log(reExam);
const remaining = student.treatDe(850,100);
console.log(remaining);
const kop = student.treatDe(650,100);
console.log(kop);
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
const output = student.exam();
// console.log(output);

 const Ali ={name:'anwar ali',
            money:8000
};

  const result = student.exam.call(Ali);
//   const remainingMoney =student.treatDe.call(Ali,500,500)
//   console.log(remainingMoney);
  const remainingMoney2 =student.treatDe.apply(Ali,[500,500]);
  console.log(remainingMoney2);

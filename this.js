// console.log(this);
const student ={
    name:'jahid rayhan ',
    money:5000,
    study: 'math',
    subjects:['calculus', "alegbra", "geometry"],
    exam: function (){
        console.log(this)
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
student.exam();
const Ali ={name:'anwar ali',
       money:8000
};
   Ali.exam =student.exam();
   Ali.exam();
let evenArr=a.filter((ele)=>{
    return !x%2;
})

let student=[
    {
        name:"student 1",
        year:3,
        age:21,
        gender:"male",
        cgpa:8,
        backlogs:false
    },{
        name: "student 2",
        year: 2,
        age: 20,
        gender: "female",
        cgpa: 7.5,
        backlogs: false
    },
    {
        name: "student 3",
        year: 1,
        age: 19,
        gender: "male",
        cgpa: 6.8,
        backlogs: true
    },
    {
        name: "student 4",
        year: 4,
        age: 22,
        gender: "female",
        cgpa: 8.5,
        backlogs: false
    },
    {
        name: "student 5",
        year: 3,
        age: 21,
        gender: "male",
        cgpa: 7.2,
        backlogs: false
    },
    {
        name: "student 6",
        year: 2,
        age: 20,
        gender: "female",
        cgpa: 6.5,
        backlogs: true
    },
    {
        name: "student 7",
        year: 4,
        age: 22,
        gender: "male",
        cgpa: 9.0,
        backlogs: false
    },
    {
        name: "student 8",
        year: 1,
        age: 19,
        gender: "female",
        cgpa: 7.8,
        backlogs: false
    },
    {
        name: "student 9",
        year: 3,
        age: 21,
        gender: "female",
        cgpa: 7.1,
        backlogs: true
    },
    {
        name: "student 10",
        year: 2,
        age: 20,
        gender: "male",
        cgpa: 8.2,
        backlogs: false
    }
];
let result=dtudents.filter((student)=>{
    return student.cgpa>=7.5;
})
let result2=students.filter((student)=>{
    return student.year===3;

})
let result3=students.filter((student)=>{
    return !student.backlogs && student.year===3 && student.cgpa>7;

})
console.log(result);
console.log(result2);
console.log(result3)

let arr=[{name:"hii",points:400},{name:"hello",points:200},{name:"hi",points:100},{name:"hiii",points:40},{name:"hell",points:150},]
let sum=arr.reduce((accum,ele)=>{
    return accum+(ele.points*ele.quantity);
},0)
let foundstudent=students.find((student)=>{
    return student.name==="student 1";
})
console.log(sum);
console.log(foundstudent);
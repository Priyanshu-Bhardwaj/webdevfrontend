// console.log("start");
// setTimeout(()=>{
//     console.log("hii");
// },2000)
// const id=console.log("end");
// setInterval(() => {
//     console.log("interval")
// }, (2000));
// setTimeout(()=>clearInterval(id), 1000);
// clearInterval(id);
let id=setInterval(() => {
    console.log("interval cb");

}, (2000));
setTimeout(()=>{clearInterval(id);
},10000);

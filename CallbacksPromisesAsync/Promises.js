// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occured");
// });

// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("hello " + dataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 10000);
//     });
    
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("not success");
//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled");
// })

// promise.catch(()=>{
//     console.log("error");
// })


// Chaining---------------
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hi");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hello");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching1");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("fetching2");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

console.log("fetching1");
let p1 = asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching2");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
})
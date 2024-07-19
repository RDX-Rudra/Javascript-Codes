// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 2000) //timeout 2s = 2000ms;
console.log("one");

setTimeout(() => {
    console.log("hello");
}, 2000);

console.log("two");


// callbacks
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("hello" + dataID);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, ()=>{
    getData(2);
});

// callbackhell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    });
});
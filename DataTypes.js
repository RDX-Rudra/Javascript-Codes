let age = 24;
console.log(typeof age);
let price = 100.5;
console.log(typeof price);
fullName = "Rudra";
console.log(typeof fullName);
isFollow = true;
console.log(typeof isFollow);
let x;
console.log(typeof x);
let y = null;
console.log(typeof y);
let a= BigInt("123");
console.log(typeof a);
let b= Symbol("Hello");
console.log(typeof b);

//Object-------------------------------//
const student = {
    fullName: "fasgfsdfg",
    age: 23,
    cgpa: 8.9,
    ispass: true
};
console.log(student);
console.log(typeof(student));
console.log(student["age"]);
console.log(student.age);
console.log(student.cgpa);
student["age"] = student["age"] + 5;
console.log(student.age);

student["fullName"] = "Rahul";
console.log(student.fullName);

//practice question-----------------//
const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);

console.log("dffddsa" + 123);


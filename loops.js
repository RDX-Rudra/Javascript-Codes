// for loop
for(let i=1; i<=5; i++){
    console.log("Rdx", i);
}

fact =1;
for(let i=1; i<=5; i++){
    fact *=i;
}

console.log(fact);

// while loop
let j=1;
while(j<=5){
    console.log(j);
    j++;
}

// Do=while loop
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);

// for-of loop  array & strings
let str="Rdx";
let size = 0;
for(let i of str){
    console.log(i);
    size++
}
console.log(size);

// for-in loop
let student = {
    name: "Rudra",
    age: 20,
    cgpa: 8.48,
    ispass: true
};

for(let i in student){
    console.log(i, " = ", student[i]);
}

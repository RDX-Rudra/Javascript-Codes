// Q1. print all the even num between 0 to 100
// for(let i=0; i<=100; i +=2){
//     console.log(i);
// }

// Q2. Number Guess

function getRndInteger() {
    let min = 0;
    let max = 100;
    return Math.floor(Math.random() * (max - min) ) + min;
}

function game(){
    let opt = prompt("1. Play 2.exit");
    if(opt == 1){
        let num = prompt("enter a number between 0 & 100: ");
        let comNum = getRndInteger;
        console.log(comNum);
        if(num == comNum){
            console.log("You Won the game")
        }
        else{
            console.log("you guess the wrong num. it is: ", comNum);
            game();
        }
    }
    if(opt == 2){
        return false;
    }
}

game();

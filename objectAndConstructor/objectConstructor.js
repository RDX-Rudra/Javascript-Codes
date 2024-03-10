function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const player = new Player ('rudra', 'x');
console.log(player.name);

function Playerx (name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name);
    };
}

const player1 = new Playerx('ullwal', 'x');
const player2 = new Playerx('Rdx', 'o');
player1.sayName();
player2.sayName();
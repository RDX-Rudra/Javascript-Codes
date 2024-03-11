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
// #############################
Object.getPrototypeOf(player1) === Playerx.prototype; // returns true
Object.getPrototypeOf(player2) === Playerx.prototype; // returns true
Playerx.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

// Player.prototype.__proto__
Object.getPrototypeOf(Playerx.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

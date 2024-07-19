function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
  };
  
  Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  console.log(Object.setPrototypeOf(Player.prototype, Person.prototype));
  console.log(Object.getPrototypeOf(Player.prototype)); // returns Person.prototype
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  
  player1.sayName(); // Hello, I'm steve!
  player2.sayName(); // Hello, I'm also steve!
  
  player1.getMarker(); // My marker is 'X'
  player2.getMarker(); // My marker is 'O'
  
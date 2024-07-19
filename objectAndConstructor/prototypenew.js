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
  
  // Don't do this!
//   Use Object.setPrototypeOf(Player.prototype, Person.prototype)
  Player.prototype = Person.prototype;
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  // Not again!
  // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  Enemy.prototype = Person.prototype;
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player('carl', 'X');
  carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
  
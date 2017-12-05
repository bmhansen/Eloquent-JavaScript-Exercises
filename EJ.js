// Chapter 2
// Looping a triangle
var toWrite = "";
for ( var height = 0; height < 7; height++ ) {
  toWrite += "#";
  console.log(toWrite);
}

// FizzBuzz
for ( number = 1; number <= 100; number++ ) {
  var toWrite = "";
  if (number % 3 == 0){
    toWrite += "Fizz";
  }
  if (number % 5 == 0){
    toWrite += "Buzz";
  }
  if (toWrite == ""){
    toWrite = number;
  }
  console.log(toWrite);
}

// Chess Board
var size = 8;
var lightSquare = true;
var toWrite = "";
for (var height = 0; height < size; height++) {
  for (var width = 0; width < size; width++) {
    if (lightSquare) {
      toWrite += " ";
    }
    else {
      toWrite += "#";
    }
    lightSquare = !lightSquare;
  }
  toWrite += "\n";
  if (size%2 == 0){
    lightSquare = !lightSquare;
  }
}
console.log(toWrite);


// Chapter 3
// Minimum
function min(a, b) {
  if (a < b) {
    return a;
  }
  else{
    return b;
  }
};

// Recursion isEven
function isEven(a) {
  if (a == 0) {
    return true;
  }
  else if (a == 1) {
    return false;
  }
  // positive numbers, isEven of N is the same as N - 2
  else if (a > 0) {
    return isEven(a - 2);
  }
  // negative numbers, implied that isEven of N is the same as N + 2
  else {
    return isEven(a + 2);
  }
}

// Bean Counting
function countChar(text, character) {
  var counter = 0;
  for (var stringPos = 0; stringPos < text.length; stringPos++) {
    if (text.charAt(stringPos) == character) {
      counter++;
    }
  }
  return counter;
}

function countBs(text) {
  return countChar(text, "B");
}

// Chapter 4
// Sum of a Range
function range(start, end, step) {
  if (arguments.length < 3){
    step = 1;
  }
  var rangeArray = [];
  if (step >= 0) {
    for (var i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    }
  }
  else {
    for (var i = start; i >= end; i = i + step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}

// Reversing an Array
function reverseArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length/2; i++) {
    let temp = array[i];
    array[i] = array[(array.length - 1) - i];
    array[(array.length - 1) - i] = temp;
  }
}

// A List
function arrayToList(array) {
  let list = null;
  for (let i = 0; i < array.length; i++) {
    list = prepend(array[i], list);
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  var newList = { 
    value: element, 
    rest: list
  };
  return newList;
}

function nth(list, n) {
  if (n > 0) {
    return nth(list.rest, n-1);
  }
  else return list.value;
}

// Deep Comparison
var deepEqual = function (a, b) {
  // if they are referencing the same thing return true
  if (a === b){
    return true;
  }
  // make sure both are objects
  if ((typeof a == "object" && a != null) && 
  (typeof b == "object" && b != null)) {
    // make sure both objects are same length
    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }
    for (var prop in a) {
      if (!b.hasOwnProperty(prop) || !deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    // all object parts are the same!
    return true;
  }
}

// Chapter 5
// Flattening
var a = arrays.reduce(function(total, current) {
  return total.concat(current);
}, []));
console.log(a);

// Mother-child age difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasMother(child) {
  return byName[child.mother] != null;
}
function childMotherAgeDif(child) {
  return child.born - byName[child.mother].born;
}

console.log(average(ancestry.filter(hasMother).map(childMotherAgeDif)));

// Historical life expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupFunction) {
  var groups = {};
  array.forEach(function(currentElement) {
    var groupName = groupFunction(currentElement);
    if (groupName in groups){
      groups[groupName].push(currentElement);
    }
    else{
      groups[groupName] = [currentElement];
    }
  });
  return groups;
}

var getByCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in getByCentury) {
  var ages = getByCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// Every and then some
function some(array, checkFunction) {
  for (var i = 0; i < array.length; i++) {
    if (checkFunction(array[i]))
      return true;
  }
  return false;
}

function every(array, checkFunction) {
  for (var i = 0; i < array.length; i++) {
    if (!checkFunction(array[i]))
      return false;
  }
  return true;
}

// Chapter 6
// A Vector Type
function Vector(x, y) {
  this.x = x;
  this.y = y;
  get height() {
    return 10;
  }
}

Vector.prototype.plus = function(vector2) {
  return new Vector(this.x + vector2.x, this.y + vector2.y);
}

Vector.prototype.minus = function(vector2) {
  return new Vector(this.x - vector2.x, this.y - vector2.y);
}

Object.defineProperty(Vector.prototype, "length", { 
  get: function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
});

// Another Cell
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width); 
}

StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight(), this.height);
}

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

// Sequence Interface

function logFive(seq) {
  for (var i = 0; i < 5 && seq.more(); i++) {
    console.log(seq.read());
  }
}

function ArraySeq(array) {
  this.array = array;
  this.position = 0;
  
  this.read = function() {
  return this.array[this.position++]
  }
  
  this.more = function() {
    return (this.position < this.array.length);
  }
}

function RangeSeq(from, to) {
  this.position = from;
  
  this.read = function() {
    return this.position++;
  }
  
  this.more = function() {
    return (this.position <= to);
  }
}

// Chapter 7
// Project: Electronic Life

//28by12
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");

function Vector(x, y) {
  this.x = x;
  this.y = y;
  
  this.plus = function(other){
    return new Vector(this.x + other.x, this.y + other.y);
  }
}

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
  
  this.isInside = function(vector) {
    return vector.x >= 0 && vector.x < this.width &&
  vector.y >= 0 && vector.y < this.height;
  }
  
  this.get = function(vector) {
    return this.space[vector.x + this.width * vector.y];
  }
  
  this.set = function(vector, value) {
    this.space[vector.x + this.width * vector.y] = value;
  }
  
  this.forEach = function(f, context) {
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var value = this.space[x + y * this.width];
        if (value != null){
          f.call(context, value, new Vector(x, y));
        }
      }
    }
  }
}

function View(){
  this.look = function(direction){
    return ;
  }
  
  this.find = function(mapChar){
    for (var i = 0; i < directionNames.length; i++) {
      if (directionNames[i] == " ") {
        return directionNames[i];
    }
  }
    return null;
  }
  
  this.findall = function(mapChar){
    var found = [];
  for (var i = 0; i < directionNames.length; i++) {
      if (directionNames[i] == " ") {
        found.append(directionNames[i]);
    }
  }
  if (found == []) {
      return null;
  }
  else return found;
  }
}

function Action(type, direction){
  this.type = type;
  this.direction = direction;
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function BouncingCritter() {
  this.direction = randomElement(directionNames);
  
  this.act = function(view) {
    if (view.look(this.direction) != " ") {
      this.direction = view.find(" ") || "s";
  }
    return new Action("move", this.direction);
  }
}

function Wall() {}

function elementFromChar(legend, ch) {
  if (ch == " ") {
    return null;
  }
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;
  
  this.toString = function() {
    var output = "";
    for (var y = 0; y < this.grid.height; y++) {
      for (var x = 0; x < this.grid.width; x++) {
        var element = this.grid.get(new Vector(x, y));
        output += charFromElement(element);
      }
      output += "\n";
    }
    return output;
  }
  
  this.turn = function() {
    var acted = [];
    this.grid.forEach(function(critter, vector) {
      if (critter.act && acted.indexOf(critter) == -1) {
        acted.push(critter);
        this.letAct(critter, vector);
      }
    }, this);
  }
  
  this.turn = function() {
    var acted = [];
    this.grid.forEach(function(critter, vector) {
      if (critter.act && acted.indexOf(critter) == -1) {
        acted.push(critter);
        this.letAct(critter, vector);
      }
    }, this);
  }
  
  this.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    if (action && action.type == "move") {
      var dest = this.checkDestination(action, vector);
      if (dest && this.grid.get(dest) == null) {
        this.grid.set(vector, null);
        this.grid.set(dest, critter);
      }
    }
  }

  this.checkDestination = function(action, vector) {
    if (directions.hasOwnProperty(action.direction)) {
      var dest = vector.plus(directions[action.direction]);
      if (this.grid.isInside(dest)){
        return dest;
      }
    }
  }

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
  }
  });
}

function View(world, vector) {
  this.world = world;
  this.vector = vector;
  this.look = function(dir) {
		var target = this.vector.plus(directions[dir]);
		if (this.world.grid.isInside(target))
			return charFromElement(this.world.grid.get(target));
		else
			return "#";
	}
	this.findAll = function(ch) {
		var found = [];
		for (var dir in directions)
			if (this.look(dir) == ch)
				found.push(dir);
		return found;
	}
	this.find = function(ch) {
		var found = this.findAll(ch);
		if (found.length == 0) return null;
		return randomElement(found);
	}
}

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function WallFollower() {
  this.dir = "s";
	this.act = function(view) {
		var start = this.dir;
		if (view.look(dirPlus(this.dir, -3)) != " ")
			start = this.dir = dirPlus(this.dir, -2);
		while (view.look(this.dir) != " ") {
			this.dir = dirPlus(this.dir, 1);
			if (this.dir == start) break;
		}
		return {type: "move", direction: this.dir};
	}
}

var actionTypes = Object.create(null);

actionTypes.grow = function(critter) {
  critter.energy += 0.5;
  return true;
};

actionTypes.move = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 1 ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
};

actionTypes.eat = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};

actionTypes.reproduce = function(critter, vector, action) {
  var baby = elementFromChar(this.legend,
                             critter.originChar);
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 2 * baby.energy ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};

function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter,
                                  vector, action);
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0)
      this.grid.set(vector, null);
  }
};

function Plant() {
  this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(view) {
  if (this.energy > 15) {
    var space = view.find(" ");
    if (space)
      return {type: "reproduce", direction: space};
  }
  if (this.energy < 20)
    return {type: "grow"};
};

function SmartPlantEater() {
  this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

var valley = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
);

// Artificial Stupidity

function SmartPlantEater() {
  this.energy = 20;
  this.digestTimeout = 0;
  this.act = function(view) {
		var space = view.find(" ");
		//if (this.digestTimeout--  == 5){
		//	return {type: "move", direction: space};
		//}
		if (this.digestTimeout-- > 0){
			return {type: "laze", direction: space};
		}
		if (this.energy > 50 && space)
			return {type: "reproduce", direction: space};
		var plant = view.find("*");
		if (plant){
			this.digestTimeout = 5;
			return {type: "eat", direction: plant};
		}
		if (space)
			return {type: "move", direction: space};
	}
}

// Predators

function Tiger() {
  this.energy = 150;
  this.digestTimeout = 0;
  this.act = function(view) {
		var space = view.find(" ");
		//if (this.digestTimeout--  == 5){
		//	return {type: "move", direction: space};
		//}
		if (this.digestTimeout-- > 0){
			return {type: "laze", direction: space};
		}
		if (this.energy > 300 && space)
			return {type: "reproduce", direction: space};
		var prey = view.find("O");
		if (prey){
			this.digestTimeout = 10;
			return {type: "eat", direction: prey};
		}
		if (space)
			return {type: "move", direction: space};
	}
}


// Chapter 8

// Retry

function MultiplicatorUnitFailure() {
  this.message = "Multiplicator Unit failed";
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  while (true) {
    try{
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure)
      console.log(e.message);
    else
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));

// The Locked Box

function withBoxUnlocked(body) {
  var wasLocked = box.locked;
  try{
    if (wasLocked) {
      box.unlock();
    }
    body();
  } finally {
    if (wasLocked) {
      box.lock();
    }
  }
}


// Chapter 9

// Month Names

var month = function() {
  var names = ["January", "February", "March", "April", "May", 
               "June", "July", "August", "September", "October", 
               "November", "december"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();

// A Return to Electronic Life

Module "grid"
  Vector
  Grid
  directions
  directionNames

Module "world"
  directions
  randomElement
  elementFromChar
  charFromElement
  View
  World
  LifelikeWorld

Module "entities"
  randomElement [duplicated]
  dirPlus
  directionNames [duplicated]
  Wall
  BouncingCritter
  WallFollower
  Plant
  PlantEater
  SmartPlantEater
  Tiger


// Chapter 15

// Game Over

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  function runGame(plans, Display) {
    function startLevel(n) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost"){
          lives--;
          if (lives != 0){
            startLevel(n);
          }
          else{
            lives = 3;
            startLevel(0);
          }
        }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    lives = 3;
    startLevel(0);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































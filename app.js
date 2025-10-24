
var car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
console.log(car.brand);
console.log(car.model);
console.log(car.year);


car.color = 'red';
delete car.year;


var person = { name: 'Ali', age: 25 };
console.log(person.age);
console.log(person['age']);


var student = { name: 'Sara', marks: 90 };
student.showMarks = function() {
    alert(this.marks);
};


var user = { name: 'Ali', address: { city: 'Lahore', zip: 54000 } };


var book = { title: 'JS Basics', pages: 200, author: 'John' };
for (var key in book) {
    console.log(key, book[key]);
}


var phone = { brand: 'Samsung', model: 'S21' };
console.log('camera' in phone);


var obj = { a: 1, b: 2, c: 3 };
var count = 0;
for (var key in obj) { count++; }
console.log(count);


var arr = [];
for (var key in obj) { arr.push(key); }
console.log(arr);


var animal = { type: 'Dog', color: 'Brown' };
var newAnimal = {};
for (var key in animal) { newAnimal[key] = animal[key]; }
console.log(newAnimal);




function Person(name, age) {
    this.name = name;
    this.age = age;
}


var p1 = new Person('Ali', 20);
var p2 = new Person('Sara', 25);
var p3 = new Person('Ahmed', 30);


function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() { alert('Hi, ' + this.name); };
}
var p4 = new Person2('Ali', 20);
p4.sayHi();


p4.sayHi(); 


function Person3(name, age) {
    this.name = name;
    this.age = age || 18;
}


p1.city = 'Karachi';


function Engine(type) { this.type = type; }
function Car(engineType) { this.engine = new Engine(engineType); }
var myCar = new Car('V6');


console.log(p1 instanceof Person);


function Person4(name) {
    this.name = name;
    return { name: 'Custom' };
}
var p5 = new Person4('Ali');
console.log(p5.name);


function Student(name, marks) { this.name = name; this.marks = marks; }
var students = [new Student('Ali', 90), new Student('Sara', 85)];




Person.prototype.greet = function() { alert('Hello!'); };


console.log(p1.greet === p2.greet);


Person.prototype.species = 'Human';
console.log(p1.species);


p1.greet = function() { alert('Hi there!'); };


console.log('greet' in p1);


Person.prototype.eat = function() { console.log(this.name + ' is eating'); };
Person.prototype.sleep = function() { console.log(this.name + ' is sleeping'); };


function Car2(brand, year) { this.brand = brand; this.year = year; }
Car2.prototype.getInfo = function() { return this.brand + ' ' + this.year; };


var car1 = new Car2('Toyota', 2020);
var car2 = new Car2('Honda', 2021);
console.log(car1.getInfo === car2.getInfo);


console.log(p1.constructor === Person);


function Animal() {}
Animal.prototype.walk = function() { console.log('Walking'); };
function Dog() {}
for (var key in Animal.prototype) { Dog.prototype[key] = Animal.prototype[key]; }
var d = new Dog();
d.walk();

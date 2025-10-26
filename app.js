//----(Part 1)----//


//Q1
var car = { brand: 'Mercedes', model: 'G63', year: 2020 };
console.log(car.brand);
console.log(car.model);
console.log(car.year);

//Q2
car.color = 'red';
delete car.year;

//Q3
var person = { name: 'Ali', age: 25 };
console.log(person.age);
console.log(person['age']);

//Q4
var student = { name: 'Sara', marks: 90 };
student.showMarks = function () {
    alert(this.marks);
};
 
//Q5
var user = { name: 'Ali Hamza', address: { city: 'Karachi', zip: 74000 } };

//Q6
var book = { title: 'JS Basics', pages: 200, author: 'John' };
for (var key in book) {
    console.log(key, book[key]);
}

//Q7
var phone = { brand: 'Samsung', model: 'S21' };
console.log('camera' in phone);

//Q8
var obj = { a: 1, b: 2, c: 3 };
var count = 0;
for (var key in obj) { count++; }
console.log(count);

//Q9
var arr = [];
for (var key in obj) { arr.push(key); }
console.log(arr);

//Q10
var animal = { type: 'Dog', color: 'Brown' };
var newAnimal = {};
for (var key in animal) { newAnimal[key] = animal[key]; }
console.log(newAnimal);


//----(Part 2)----//


//Q1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//Q2
var p1 = new Person('Ali', 20);
var p2 = new Person('Sara', 25);
var p3 = new Person('Ahmed', 30);

//Q3
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () { alert('Hi, ' + this.name); };
}

//Q4
p1.sayHi();
p2.sayHi();
p3.sayHi();


//Q5
function Person(name, age) {
    this.name = name;
    this.age = age || 18;
}

//Q6
p1.city = 'Karachi';

//Q7
function Engine(type) { this.type = type; }
function Car(engineType) { this.engine = new Engine(engineType); }

//Q8
var myCar = new Car('V6');

console.log(p1 instanceof Person);


//Q9
function Person(name) {
    this.name = name;
    return { name: 'Custom' };
}
var p4 = new Person('Ali Hamza');
console.log(p4.name);

//Q10
function Student(name, marks) { this.name = name; this.marks = marks; }
var students = [new Student('Ali', 90), new Student('Hamza', 85)];


//----(Part 3)----//


//Q1
Person.prototype.greet = function () { alert('Hello!'); };

//Q2
console.log(p1.greet === p2.greet);

//Q3
Person.prototype.species = 'Human';
console.log(p1.species);

//Q4
p1.greet = function () { alert('Hi there!'); };

//Q5
console.log('greet' in p1);

//Q6
Person.prototype.eat = function () { console.log(this.name + ' is eating'); };

//Q7
Person.prototype.sleep = function () { console.log(this.name + ' is sleeping'); };

//Q8
function Car(brand, year) { this.brand = brand; this.year = year; }
Car.prototype.getInfo = function () { return this.brand + ' ' + this.year; };

//Q9
var car1 = new Car('Civic', 2020);
var car2 = new Car('Bmw', 2021);
console.log(car1.getInfo === car2.getInfo);

console.log(p1.constructor === Person);

//Q10
function Animal() { }
Animal.prototype.walk = function () { console.log('Walking'); };
function Dog() { }
for (var key in Animal.prototype) { Dog.prototype[key] = Animal.prototype[key]; }
var d = new Dog();
d.walk();

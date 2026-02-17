
person1 = {
    firstName : "Omar",
    lastName : "Akib",
    Age : 25,
    isEmployee : false,
    fullName  : function(){ 
        console.log(person1.firstName + " " + this.lastName);},
    //2nd way
    sayThanks : () =>{ 
        console.log(person1.firstName + " " + person1.lastName);},
    //nested object
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
  },
};

console.log(person1);
console.log(person1.firstName);
//2nd way
console.log(person1["lastName"]);
console.log(person1.Age);
console.log(person1.isEmployee);
person1.fullName();
person1.sayThanks();

// add new Properties
person1.nationality = "English";
// add new method
person1.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.name());
// delete
delete person1.Age;
// exists?
let result = ("firstName" in person1);
//access nested object
person1.myCars.car3;  //or person1["myCars"]["car2"];




//output section
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// using for
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
console.log(text);
// Create an Array
const myArray = Object.values(person);
console.log(myArray);

// Stringify the Array
let text1 = myArray.toString();
console.log(text1);

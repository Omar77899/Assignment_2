let fruits = ['banana', 'orange', 'apple', 'mango'];
let ab = [1,2,3];

let length = fruits.length;
//console.log(length);

//console.log(fruits[1]);
//console.log(fruits.at(-1));

let list1 = fruits.toString();
//console.log(list1);

let list2 = fruits.join(" ");
//console.log(list2);

fruits.pop();
fruits.push("lichi");
fruits.shift();
fruits.unshift("lichi2");
//console.log(fruits.join(" "));

let list3 = fruits.concat(ab);
//console.log(list3);

let arr = [1,2,3,4,5,6,7,8];
//arr.copyWithin(4,0);
//let list = arr.join(" ");
//console.log(list);
//console.log(arr.copyWithin(4,0,1).join(" "));  // start, end, copy length size

//const myArr = [[1,2],[3,4],[5,6]];
//const newArr = myArr.flat();
//console.log(newArr);


//splice return []
let myArr = [1,2,3,4,5,6,7,8];
myArr.splice(2, 0, "Lemon", "Kiwi");
//console.log(myArr);

myArr.splice(2, 0, "omar", "hossain");
//console.log(myArr);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
//console.log(spliced);
//console.log(months);

const citrus = months.slice(2);
//console.log(citrus);
const citru = months.slice(1,3);
//console.log(citru);


// search method
const forserch = ["Apple", "Orange", "Apple", "Mango","omar"];
let index = forserch.indexOf("Apple") + 1;
//console.log(index);
let lastPosition = forserch.lastIndexOf("Apple") + 1;
//console.log(lastPosition);

const numbers = [4, 9, 16, 2, 29];
let xy = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
//console.log(xy);



// Alphabetic Sort
const s = ["Banana", "Orange", "Apple", "Mango",'Omar'];
//console.log(s.sort().reverse());
//s.toSorted();  //without change the main array
//toReversed()  //without change the main array


// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
  return a - b;
});
//or points.sort(function(a, b){return b - a});
//console.log(points);

//min
function myArrayMin(arr) {
  return Math.max.apply(null, arr); //min
}
console.log(myArrayMin([40, 100, 1, 5, 25, 10]));
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }


// shot in obj
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});
//console.log(cars);
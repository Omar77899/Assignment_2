/*let obj1 = {
    name : "Omar",
    role : "Student",
    age : 23
}
let obj2 = {
    name : "Akib",
    role : "Programmer",
    id : 24
}

// in
for(let key in obj1){
    let element = obj1[key];
    console.log(key,element);
}
console.log('');

let list = "";
for(let key in obj1){
    list += obj1[key] + " ";
}
console.log(list);
console.log('');

// of
for(let key of "Pro"){
    console.log(key);
}

console.log(obj1.name);

//map
let list3 = [1,2,3,4,5,6];
let list2 = list3.map((el,index,arr) => console.log(el));
*/

const characters = [
  { name: 'Luke Skywalker', height: '172', mass: '77', eye_color: 'blue', gender: 'male' },
  { name: 'Darth Vader', height: '202', mass: '136', eye_color: 'yellow', gender: 'male' },
  { name: 'Leia Organa', height: '150', mass: '49', eye_color: 'brown', gender: 'female' },
  { name: 'Anakin Skywalker', height: '188', mass: '84', eye_color: 'blue', gender: 'male' },
];

// ===== MAP =====
// Get an array of all names
const allNames = characters.map(char => char.name);
console.log('All names:', allNames);
// ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']


// Get an array of all heights
const allHeights = characters.map(char => char.height);
console.log('All heights:', allHeights);
// ['172', '202', '150', '188']

// Get an array of objects with just name and height properties
const nameAndHeight = characters.map(char => ({ name: char.name, height: char.height }));
console.log('Name and height:', nameAndHeight);
// [{ name: 'Luke Skywalker', height: '172' }, ...]

// Get an array of all first names
const firstNames = characters.map(char => char.name.split(' ')[0]);
console.log('First names:', firstNames);
// ['Luke', 'Darth', 'Leia', 'Anakin']


// ===== REDUCE =====
// Get the total mass of all characters
const totalMass = characters.reduce((acc, char) => acc + Number(char.mass), 0);
console.log('Total mass:', totalMass);
// 346

// Get the total height of all characters
const totalHeight = characters.reduce((acc, char) => acc + Number(char.height), 0);
console.log('Total height:', totalHeight);
// 712

// Get the total number of characters in all the character names
const totalNameChars = characters.reduce((acc, char) => acc + char.name.length, 0);
console.log('Total characters in names:', totalNameChars);
// 57

// Get the total number of characters by eye color
const eyeColorCount = characters.reduce((acc, char) => {
  const color = char.eye_color;
  acc[color] = (acc[color] || 0) + 1;
  return acc;
}, {});
console.log('Eye color count:', eyeColorCount);
// { blue: 2, yellow: 1, brown: 1 }


// ===== FILTER =====
// Get characters with mass greater than 100
const massOver100 = characters.filter(char => Number(char.mass) > 100);
console.log('Mass > 100:', massOver100);
// [{ name: 'Darth Vader', ... }]

// Get characters with height less than 200
const heightUnder200 = characters.filter(char => Number(char.height) < 200);
console.log('Height < 200:', heightUnder200);
// [Luke, Leia, Anakin]

// Get all male characters
const maleCharacters = characters.filter(char => char.gender === 'male');
console.log('Male characters:', maleCharacters);
// [Luke, Darth Vader, Anakin]

// Get all female characters
const femaleCharacters = characters.filter(char => char.gender === 'female');
console.log('Female characters:', femaleCharacters);
// [Leia]


// ===== SORT =====
// Sort by name
const sortedByName = [...characters].sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by name:', sortedByName.map(c => c.name));
// ['Anakin Skywalker', 'Darth Vader', 'Leia Organa', 'Luke Skywalker']

// Sort by mass
const sortedByMass = [...characters].sort((a, b) => Number(a.mass) - Number(b.mass));
console.log('Sorted by mass:', sortedByMass.map(c => `${c.name}: ${c.mass}`));
// Leia: 49, Luke: 77, Anakin: 84, Darth: 136

// Sort by height
const sortedByHeight = [...characters].sort((a, b) => Number(a.height) - Number(b.height));
console.log('Sorted by height:', sortedByHeight.map(c => `${c.name}: ${c.height}`));
// Leia: 150, Luke: 172, Anakin: 188, Darth: 202

// Sort by gender
const sortedByGender = [...characters].sort((a, b) => a.gender.localeCompare(b.gender));
console.log('Sorted by gender:', sortedByGender.map(c => `${c.name}: ${c.gender}`));
// Leia: female, then all males


// ===== EVERY =====
// Does every character have blue eyes?
const allBlueEyes = characters.every(char => char.eye_color === 'blue');
console.log('All blue eyes?', allBlueEyes);
// false

// Does every character have mass more than 40?
const allMassOver40 = characters.every(char => Number(char.mass) > 40);
console.log('All mass > 40?', allMassOver40);
// true

// Is every character shorter than 200?
const allShorterThan200 = characters.every(char => Number(char.height) < 200);
console.log('All shorter than 200?', allShorterThan200);
// false

// Is every character male?
const allMale = characters.every(char => char.gender === 'male');
console.log('All male?', allMale);
// false


// ===== SOME =====
// Is there at least one male character?
const hasMale = characters.some(char => char.gender === 'male');
console.log('At least one male?', hasMale);
// true

// Is there at least one character with blue eyes?
const hasBlueEyes = characters.some(char => char.eye_color === 'blue');
console.log('At least one with blue eyes?', hasBlueEyes);
// true

// Is there at least one character taller than 200?
const hasTallerThan200 = characters.some(char => Number(char.height) > 200);
console.log('At least one taller than 200?', hasTallerThan200);
// true

// Is there at least one character that has mass less than 50?
const hasMassUnder50 = characters.some(char => Number(char.mass) < 50);
console.log('At least one with mass < 50?', hasMassUnder50);
// true
*/
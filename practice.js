/* 1
function run(r,b){
    rr = (r/b*100);
    console.log(rr.toFixed(2)) 
}
run(45,30);
*/

/* 2
function countpairs(s){
    let count=0;
    for(let i=0; i<s.length; i=i+2) 
        if(s[i+1] % 2 == 0){
            count++;
        }
    console.log(count);
}
countpairs("a2a4b1b2b3");
*/

/* 3
function reverseString(s){
    let c = [];
    let n = s.length
    for(let i=0; i<n; i++){
        c[i] = s[n-1-i];
    }
    console.log(c.join(""));
    
}
reverseString("abc");

console.log("abcde".split("").reverse().join(""));
*/


/* callback
function myFunction(callback) {
    setTimeout(() => {
        const data = { name: "Aman", age: 21 };
        callback(data);
    }, 3000);
}

myFunction((data) => {
    console.log("Data:", data);
});

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction) */

/* 4
function isPalindrome(str){
    let reversedStr = str.split('').reverse().join('');
    if(str == reversedStr)
        return true;
    else
        return false;

}
console.log(isPalindrome("hello"));
*/

/*5
function mergeArrays(arr){
    const newArr = arr.flat().join(", ");
    return newArr;
}
console.log( mergeArrays([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]));
*/

/* 6
const findShortestWord = (str) =>{
    const words = str.split(' ');
    const shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest;
};
console.log(findShortestWord("Today is Monday"));
*/

//console.log(Student_names ('Zara', 'Sadia' , 'Mahin' , 'Adnan' , 'Maisha', 'Faiyaz') );

/* 7
function removeDuplicate(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

let Student_names = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];
let result = removeDuplicate(Student_names);
console.log(result);
*/

/* 8
books = [];
function createBookList(title, author, copies){
    book = {
        title,
        author,
        copies
    };
    books.push(book);
}
function add_Copies(title, copies){
    let index = books.findIndex(book=>book.title === title)
    if(index !== -1){
        books[index].copies += copies;     //index = 0 → books[0] → { title: "js", copies: 10 }
    }
    else{
        console.log("Book not found");
    }

}
function sell_Book(title, copies){
        let index = books.findIndex(book=>book.title === title)
    if(index !== -1 && copies<=book.copies){
        books[index].copies -= copies;
    }
    else{
        console.log("Book not found or not available");
    }

}
function getDetails(){
    console.log("Book name: " + book.title + "Author name: " + book.author + "Available copies: " + book.copies);
    //console.log(books);
}


createBookList("js","omar",12);
//console.log(book);
console.log(books);
add_Copies("js",12);

getDetails();

sell_Book("js",4);
getDetails();
//sell_Book("js",22);
//getDetails();
*/


/* 9
function parseString(...str){
    const allNumbers = str.every(str => !isNaN(str) && str.trim() !== '')
    //console.log(allNumbers);
    if(allNumbers){
        const total = str.reduce((sum,num) => sum+Number(num),0);
        return total;
    }
    else{
        return str.join(' ');
    }
    
}
console.log(parseString("21", "a24", "40")); */

/* 10
function getPositiveNumbers(...arr){
    let list = [];  // or const list = arr.filter(num => num >= 0);
    for(let i=0; i<arr.length; i++){     
        if(arr[i] >= 0){
            list.push(arr[i]);
        }
    }
    return list;
}
const result = getPositiveNumbers(2, -5, 10, -3, 8, -1, 0, 7);
console.log(result); 
*/

/* 11
function findMissingNumber(arr){
    const n = arr.length+1;
    const nSum = n*(n+1)/2;
    const aSum = arr.reduce((sum, num) => sum+num,0);
    return nSum-aSum;
}
const result = findMissingNumber([1, 2, 3, 4, 6, 7, 8]);
console.log(result);  
*/


/* 12
function getMaxProduct(arr) {
    const result = arr.sort((a,b) => b-a);
    return result[0]*result[1];
}
console.log(getMaxProduct([2, 3, 5, 6, 7]));
*/

/* 13
function findPrimeNumbers(arr) {
    return arr.filter(num => {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    });
}
*/

/* 14
function Palindromic(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = ' '.repeat(rows - i);
    let line = '';
    
    // Ascending
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    
    // Descending
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }
    
    console.log(spaces + line);
  }
}

Palindromic(5);
*/
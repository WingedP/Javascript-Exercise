const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//Milestone 2 🛣🏃Filter
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


//1//FILTER FIRST CHARACTER A //DONE//
let filter1inventorArray = [];
function firstCharA(name) {return name.charAt(0) == "A"}
filter1inventorArray = inventors.filter(firstCharA);
console.log ("Inventors whose name starts with 'A':",filter1inventorArray);

//1.2// Print out an array of the inventors whose name contains 'n'. //DONE//
let filter2inventorArray2 = [];
function nameContainN(name) {return name.includes("n")}
filter2inventorArray2 = inventors.filter(nameContainN);
console.log ("Names contain n:",filter2inventorArray2);

//1.3// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
//DON'T KNOW HOW TO DO IT T___T

//1.4// Print out an array of the numbers which are odd.
let filter4oddArray = [];
filter4oddArray = numbers.filter((num) => num % 2 ==1)
console.log("odd numbers: ",filter4oddArray)

//1.5// Print out an array of the numbers that have two digits.
let filter5twodigitsArray = [];
filter5twodigitsArray = numbers.filter((num)=> num >=10) 
console.log("2-digit numbers:", filter5twodigitsArray)

//Print out an array of the numbers which are prime.
//DON'T KNOW HOW TO DO IT T___T


/////Milestone 3 🛣🏃MAP///// //DONE//

//Print out the first name of each inventor.
 //DONE//
//1st method//
let map1inventorsFirstname = [];
function firstName (name){
  let nameParts = name.split(' ');
  return nameParts[0];
}
map1inventorsFirstname = inventors.map(firstName);
console.log("each inventor's first name:", map1inventorsFirstname);

//2nd method//
// let map1inventorsFirstname = [];
// function firstName(name) {
//   for (i=0;i<=name.length;i++) {
//     if (name[i] == " ") {return name.slice(0,i)}
//   }
// }
// map1inventorsFirstname = inventors.map(firstName);
// console.log(map1inventorsFirstname);


//Print out the length of every inventor's full name.
 //DONE//
let map2inventorNamelmap2ength = [];
function nameLength(name) {
  for (i=0;i<=name.length;i++) {
    return name.length}
}
map2inventorNamelength = inventors.map(nameLength);
console.log ("the length of every inventor's full name:",map2inventorNamelength);

//2nd method:
// let map2inventorNamelmap2ength = [];
// map2inventorNamelmap2ength = inventors.map((name) => name.length);
// console.log("the length of every inventor's full name:", map2inventorNamelmap2ength);

//Print out all the inventors' names in uppercase.
 //DONE//
 let map3inventorsUppercases = [];
function uppercaseInventors (name) {
  return name.toUpperCase();
}
map3inventorsUppercases = inventors.map(uppercaseInventors);
console.log(map3inventorsUppercases);

/////////////this part is wrong/////////
// function uppercaseInventors (name) {
//   for (i=0;i<=name.length;i++) {
//     if (typeof name[i] === 'string') {name[i] = name[i].toUpperCase();}
//   }
// }
/////////////this part is wrong/////////


//Print out initials of all inventors(e.g. A.E., I.N., ...)
//DONE//
let map4inventorInitials = [];
function nameInitials (name){
  let inventornameParts = name.split(' ');
  return inventornameParts[0].charAt(0) + inventornameParts[1].charAt(0);
}
map4inventorInitials = inventors.map(nameInitials)
console.log("inventors' initials:",map4inventorInitials)


//Print out an array of every number multiplied by 100.
//DONE//
//1ST WAY//
let map5multiplynumber = [];
function multiplynumbers(number) {return (number*100)}
map5multiplynumber = multiplynumbers;
console.log("map 5 - multiply number:",numbers.map(multiplynumbers))

//2ND WAY//
// let map5multiplynumber = [];
// map5multiplynumber = numbers.map((number) => number*100);
// console.log("array of number * 100:", map5multiplynumber);

//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
//DONE//
let map6poweroftwo = [];
for(i=1;i<=6;i++){map6poweroftwo.push(Math.pow(2,i))}
console.log("power of two:",map6poweroftwo);



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Milestone 4 🛣🏃Sort = //DONE//
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Sort all the inventors in alphabetical order, A-Z.
//DONE//
let sort1alphabetorder = inventors.sort();
console.log("Inventors in Alphabetical Order:",sort1alphabetorder)

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
//DONE//
let sort2reverseAlphabet = [];
function alphabetReversed(a,b) 
{
for (i=0;i<=inventors.length;i++) 
{if(a>b){return -1} else if(a<b){return 11} else{return 0}}
}
sort2reverseAlphabet = inventors.sort(alphabetReversed);
console.log("Inventors in Reversed Alphabetical Order:",sort2reverseAlphabet)

// Sort all the inventors by length of name, shortest name first.
//DONE//
let sort3namelengthShort = [];
function namelengthShort(a,b) 
{
  for(i=0;i<=inventors.length;i++)  
  {if(a.length>b.length){return 1} else if(a.length<b.length){return -1} else{return 0}}
}

sort3namelengthShort = inventors.sort(namelengthShort);
console.log("Shortest inventors'names first:",sort3namelengthShort)


// Sort all the inventors by length of name, longest name first. Do not use the reverse method.
//DONE//
let sort4namelengthLong = [];
function namelengthLong(a,b) 
{
  for(i=0;i<=inventors.length;i++)  
  {if(a.length>b.length){return -1} else if(a.length<b.length){return 1} else{return 0}}
}

sort4namelengthLong = inventors.sort(namelengthLong);
console.log("Longest inventors'names first:",sort4namelengthLong)


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Milestone 5 🛣🏃Reduce //DONE//
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


// Find the sum of all the numbers.
//DONE//
let reduce1arraySum = numbers.reduce((a,b) => a + b,0)
console.log("Sum of all numbers:",reduce1arraySum)

// Find the sum of all the even numbers.
//DONE//
let reduce2sumEven = numbers.filter((num) => num % 2 ==0).reduce((a,b) => a + b,0)
console.log("Sum of all even numbers:",reduce2sumEven)

// Create a string that has the first name of every inventor.
//DONE????//
let reduce3splitinventorsFirstname = [];
function inventor1stnamesplit (namezz) { 
  let splittingApart = namezz.split(' ');
  return splittingApart [0];}

reduce3splitinventorsFirstname = inventors.map(inventor1stnamesplit);
console.log("String of inventors' first names:",reduce3splitinventorsFirstname.toString())




////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//Milestone 6 🛣🏃Some / Every //DONE//
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Does any inventor have the letter 'y' in their name?
//DONE//
let someevery1letterY = [];
someevery1letterY = inventors.some((name) => {return name.includes("y")})
 console.log("letter 'y' in their names?",someevery1letterY)

// or alternative:

// let someevery1letterY =[];
// function letterYname(name) {name.includes("y");}
// someevery1letterY = inventors.some(letterYname);
// console.log(someevery1letterY)

// Does every inventor have the letter 'e' in their name?
//DONE//
let someevery2letterE = [];
someevery2letterE = inventors.every((name) => {return name.includes("e")})
 console.log("letter 'E' in every name?",someevery2letterE)


// Does every inventor have first name that's longer than 4 characters?
//DONE//
let someevery3inventors1stname = [];
function inventor1stnamesplit (namess) { 
  let splitpart = namess.split(' ');
  return splitpart [0];}
someevery3inventors1stname = inventors.map(inventor1stnamesplit);

let someevery3firstnamelonger4chars = someevery3inventors1stname.every((name) => {name.length >4;})
console.log ("first name longer than 4 characters?",someevery3firstnamelonger4chars)





////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Milestone 7 🛣🏃Find / FindIndex
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


// Find the inventor that has a middle name.
let find1middlename = []
find1middlename = inventors.find((name) => name.split(" ").length >2 );
console.log("inventor with middle name:", find1middlename);

// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

// Find the number divisible by 7.
let find3divisibleby7 = []
find3divisibleby7 = numbers.find((number) => number % 7 == 0);
console.log("number divisible by 7:", find3divisibleby7);

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.
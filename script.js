//Javascript is aa high-level, bo
//alert("hello word")

//INTRODUCTION TO JAVASCRIPT
//=====JS SYNTAX VARIABLES=====

//Syntax is a rules that fefines how you write any programming langauage. 
//syntax is the set of rules that defines the combination of symbols that are condisdered to be correctly struction program in that language

// statement - na single instruction in a program
// comment- a note in the code that is ignored by the interpreter, used to explain the code 

// A veriable is a  container used to store data value in Js




// A value is a piece of data. It is the most fundemental unite of information that we have in programing.  Call in the smallest unit of information e.g 23, 7, "food"

var age= 70;
var age=50; 
var frust= "mango"
console.log(frust);
let firstName = "John"
let xLover = document.getElementById("xlover");


//Variables Naming rules/ convention
//1. Varibale name should be descriptive e.g let color = "mango" le color= "bule",

//2. varible names must strat with (a-z,  A-Z) e.g if the variable contain just a name use lower case letter let age =80;

// if the contains two (names)use: 
//a.camel case e.g let firstName = "xLover"
//b. pascal case e.g let FirstName = "xLover"
//c. snake case e.g let first_name = "John"
// use paschal case e.g let class = ""


//  WAYS OF DECLEARING VARIABLES

 //1. let - blocked-scoped {}
 //2. const - bloked-scoped
//3. var-global-scoped 

function testLetConst() {
    if(true){
        let y=20;
        const z=40;
        console.log(y,z);
    }
}

testLetConst();


//Dynamic Typing

let myAge =100;
myAge=500;
console.log(myAge);

let bestFood ="garri";
bestFood ="rice";
console.log(bestFood);

let mySchool ="mitaTch"
mySchool = "uyo";
console.log(mySchool);

let myHome="akaRoad";
myHome="abak";
console.log(myHome);

let myGirl="jesus"
myGirl="mary";
console.log(myGirl);


//===== DATA TYPES IN JAVASCRIPT=====
 // What is a data type? 

 // Data type is an attribute of data which tell the compiler or interperter how the programmer intends to use the data
 // There are 7 primitive Data types in JS: 
 // 1. Strings
 // 2. number
 // 3. boolean
 // 4. null
 // 5. underfined
 // 6. BigInt
 // 7. Symbol +, -. <>
 

              //======Strings=======
// Strings are a froup of characters - alphabets; a-z
// They can be indentified by the use of ' ' or ""
 
let city = "Uyo";
 console.log(city);
 console.log(typeof city)

 let herAge = 10;
 console.log(herAge);
 console.log(typeof herAge);

            //======numbers========
// numbers are digits, 0-9. In JS, numbers can either be integer(ints or int)/ floats 


let float = 2.1; 

let x =45;
let b =7;
let addNum = x + b;
console.log(addNum)
  
             //======Boolean=====
// Boolean is a data type that returns true or false

console.log(45==45); //lose 
console.log("70"=== 70); // strict

             //======Underfined======
let hisAge;
console.log(typeof hisAge);


// OBJECT DATA TYPES
 // There are two object data types

 // 1. Arrays
 // 2. Objects 

  //=====Arrays======
  // Arrays are special types of variables used to store more than one value []

  //Examples
  let numbers= [7,60,3,90,5,40]; //an array of number
  console.log(numbers[3]);

  //declear arrays student 

  let studentName= ["Davis", "Favour", "Hope", "Maria", "Brizo", "Ambersedor","Victor","Xlover","Edidiong"];
  console.log(studentName[4]);








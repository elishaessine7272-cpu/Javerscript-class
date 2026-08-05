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

  let studentName= [
    "Davis", 
    "Favour", 
    "Hope", 
    "Maria", 
     "Brizo", 
     "Ambersedor",
     "Victor",
     "Xlover",
     "Edidiong"];
  console.log(studentName[4]);


 //=====Object======
 // Object are used to store collection of data in key-vaule pairs{}

 let person ={
    name: "Xlover",
    age: 800,
    isMarried: false,
    height: 6.2,
    eyecolor: "brown",
    hobbies: ["singing","praying","cooking"]
 };
//  console.log(person);
 console.log(person.hobbies);


let favFood =[
    "afah soup",
    "bitterleaf soup",
    "garri",
    "rice",
    "yam",
    "beans"
];
console.log(favFood);

let myCar ={
    name: "Toyota",
    model: "Corolla",
    year: 2020,
};
console.log(myCar);

let myGirls ={
    name: "Mary",
    age: 25,
    isSingle: true,
    shapes: ["think","chubby","chocolate"]
};
console.log(myGirls);

let myName=[
    "John",
    "Jane",
    "Bob",
    "Love Jnr",
];
console.log(myName [3]);






//Multiplication (*)
let multNum =4 * 5;
console.log(multNum );
console.log(4 * 5); 

const m =13;
const p =3;
const mult_num =m * p;
console.log(mult_num);

//Mudulus operator divides number and return the remainder (%)

let div = 44 / 2;
console.log(div);

let mod = 44 % 2;
console.log(mod);

// // increment ++ 
// let incNum = 20;
// console.log(incNum);
// incNum++
// console.log(incNum);


// USing a function
let inc_num = 20;
function increment() {
    console.log(inc_num);
    inc_num++;
}
increment();
increment();
increment();
increment();
increment();

//decrement --
let decNum = 20;
decNum--;
decNum--;
decNum--;
decNum--;
decNum--;
console.log(decNum);


// ===== Assignment Operators =====
// Assignment operators are symbols that assign vaules to variable 
// =. +=, -=, /=, and %=


let a = 5
a += 3  // this means a = a + 3
console.log(a);

let str = "Hello";
str += " World";
console.log( str);

// Subtraction
 let z =10
 z -= 5;
 console.log(z);

 // multiplication
   let w = 7;
   w *= 14;
   console.log(w);

   // division
   let d = 20;
   d /= 5;
   console.log(d)

   // modulus
   let modu = 17
   modu %= 4;
   console.log(modu);

     // === COMPARISON OPERATOR ===
     // There are opeterors used to combine multiple boolean expressions 
     

      //Loose equal to (==)
     console.log( 5 == 5);

     let ageNumber = 18;
     let ageString = "18";
console.log( ageNumber == ageString)

// 2. Strict equal to (===)
let score = 100;
let scoreText = "100";
console.log( score === scoreText);

// != checks if the vaule are not the same (ignores date type)
 console.log( 5 != 2);

 let price = 500
 let priceText = "500";
 console.log( price !== priceText );

 let level = 3
 console.log (level !== 3);

 // < less than 
 let age1 = 15;
 let requiredAge = 18;
 console.log(age1 < requiredAge);

 // 6 greater than >
 let balnce = 5000;
 let priceToPay = 3000;
//  console.log( balance > priceToPay);

 // 7. <= less than or equal to
     let attempts = 3;
     let maxAttempts = 3; 
     console.log(attempts <= maxAttempts);

     //====Logical Operators =====
     // logical operators are used to combine multiple boolean expressions. They are used in decision making. 
      // 1. && (logocal AND) - returns true if both operands are true
      // 2. || (logical OR) - reture  true if at least one of the operands is true.
      // 3.! ( logical NOT) - nagates the boolean vaule of an operand

      // 1. && Logical and
      let ageP =20;
      let hasID = true;
      console.log(ageP >= 18 && hasID ===true);

      // .
      let isLoggedIn = true;
      let hasPaid = true;
      if ( isLoggedIn && hasPaid){
        console.log("You can view premium content");
      } else {
        console.log("Please log in and make payment");
      }

      // logical or ||
    //   let isAdmin = false;
    //   let isModerator = false;
    //   console.log( isAdmin || isModerator); 
         
    //   //b. 
    //   let hasCash = true
    //   let hasCard = false
    //   if (hasCash || hasCard) {
    //     console.log('payment success');
    //   } else {
    //     console.log("No payment method available")
    //   }

    //   // logical not ! 

    //   let isOnline = false;
    //   console.log(!isOnline);

    //   let hasAccess = true;
    //   console.log(!hasAccess);

    //   let isBanned = true;
    //   if(!isBanned) {
    //     console.log("Welcome to the platform");
    //   } else{
    //     console.log("Your account is banned!");
    //   }

      let loggedIn = true;
      let isAdmin = false;
      let isBanned = false;
      if ( loggedIn && !isBanned && isAdmin){
        console.log("Welcome Admin");
      }else {
        console.log("Access Restricted");
      }


    // ==== String Operators ====
    // String concatenation is the process of combining two or more strings together using the + operator 

    let name = "Edidiong"
    let ourAge = 100
    const bestCourse = "JavaScript"
    let greeting = " Hi, my name is " + name + ", " + ", " + "I am " + ourAge + "years old and my best course" + bestCourse

    console.log(greeting)

    // if and  else if statement. 
    // let textScore = 80;
    // if(textScore >=70){
    //   console.log(" Grade: A - Execllent work!");
    // } else if ( testScore >= 50){
    //   console.log("Grade B: -Good Job");
    // } else if ( testScore >= 40) {
    //   console.log(" Grade: C - You passed");
    // } else {
    //   console.log("Grade: F - You failed Worefully");
    // }

    // ====Swtich Statement =====
    // The switch statement is used to perform different actions based on the different conditions. It is an alternative to using multiple if...else statements when you have conditions to check





    let role = "admin"
    switch(role){
      case "admin":
        console.log("You have full access");
        break;
        case "student":
        console.log("welcome student");
        break;
        case "tutor":
          console.log("welcome tutor");
          break;
          case "vistor":
            console.log("you can only read contents");
            break;
            defult: 
            console.log("Unknow role");
    }

    //======Ternary Operator=====
    // A shorter version of if... else

      let herAge0 = 17;
      let message = herAge0 >= 18 ? "adult" : "minor";
      console.log(message);


      let isLoggedInp = false;
      let logInStatus = isLoggedInp ? "welcome" : "Please log in";
      console.log(logInStatus);

      // ====FUNTIONS====
      // A Function is a reusable block of code that perform a specific task. it is a fundermental building block in programing that allows us to break down complex problem into smaller, more manageabled pieces. Functions can take inputs (paremeters) and reture outputs (results)

      //types
      // - normal funtion - function name(){}
      // - arrow function - const name = () => {}

        function greet(){
          console.log("Hello, Brilliant");
        }
        greet();
        

        sayHello()
        function sayHello(){
          console.log("Hello, Welcome to Javascript Class");
        }

        //  Funtionn Expression
        // Anytime we get a veriable and set it equal to something, whether it's a function or string or something else, that is known as expression
        const speak= function(){
          console.log("Good day!")
        }

        //== Paremeters and Arguments===
        //Paremeters = Placeholders
        // Arguments = Actual Value

        function add(a,b){
          return a + b
        }
        console.log(add(10,10))
        console.log(add(1,10))
        console.log(add(10,7))
        console.log(add(1,11))

        // Arrow functions
        const sayHi = () => console.log ("Hi");
        sayHi("sayHi")

        // // //. Arrow funtions with parameter
        //  const greet = (names) => console.log("Hello" + names);
        //  greet ("Wizkid")

        //   //3
        //   const addNum = ( x,y ) => x + y
        //   console.log(addNum (5, 6));

        //   //4.
        //   const getGrade = (score) => {
        //     if (score >= 70) return "AA";
        //     else if (score >= 50) return "B";
        //     else return "F";
        //   };
        //   console.log(getGrade(90))

          //===== EVENTS =====

          // Events are actions or occurences that happen in the browser, often triggerdby user interactions( like clicks, keypresses, or from submission)
          // Syntax
          //element event=' some JavaScipr
        
          // common Timing Events:
          // setTimeout( function, milliseconds) - executes a function once after a specified number of milliseconds
          // setInterval( function, milliseconds) - Repeatedly execute a function 
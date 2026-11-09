// Loops- A loop is a programing  strecture that repeats a  bloock of code. It prevents you from writing the same insteuction mant times

//iteration - mean repeating a prcess. Each time the body of a lopp runs is one interation

// . Why Do We Need Loops?
// . Loop throuh array and strings 
// . Process many objects or record 
// . Repeat calculations.
// . Seach for values.
// . Count items that satisfy a conditions.
// . Generate  repeated HTML elements.
// . Automate respetitive task.

// for loops
for (f=1; f <= 5; f++){
    console.log(f);
}

const fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
console.log(fruits.length);

for(fruit=0; fruit < fruits. length; fruit++){
    console.log(fruits[fruit])
}
 // if statement in the for loops
 for(i=1; i<=10; i++){
    if (i % 2 == 0){
        console.log(1);
    }
 }

 // do while loop
 let i = 0;
 do {
    console.log(i);
    i++;
 } while (i < 5);


 // API meanss Application progamming INterface. An API provides a way for one sotfware aplication to communicate with another.

 // API Request- An API resquest i a message sent to an API asking it to perform an action or provide information.

 // API Respond - An API response is the message sent back from an API after it has processed a request. It contains the data or information requested, or an error message if the request could not be fulfilled.

 // API Endpoint - An endpoint is a specific URL used to acess a particular resource or operation. 

 // HTTP MTHODS
 // GET - get data get weather information
 // POST - send data to the server. create a new user
 // PUT - update existing data. update user information
 // DELETE - remove data from the server. delete a user
 // PATCH - update part of the data. update user email address

 // API QUERY PARAMTER- Query parameter alll you to send addtionla information in a URL
 
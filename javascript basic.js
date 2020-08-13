

         Javascript Basics

          DATATYPE 
 
1. NUMBERS    eg 1 3.3 -6 we can do math, module and moduler operation
i.e 4-5 = -1 0r 4+4+4=12
2.STRINGS: they word, number or characters are always nested in double quotes or single quote eg
"hello world"  or "45"
 strings{concantinate } eg "hello"+"world"
 strings{escape character ie u want to incude quote in yr string} "hello world \"welcome\""
 strings {.length} to know the number of character in a string
 strings {[] is to know the a specific number in a character}
3.BOOLEANS: they are either true or false
4.null eg null
5. undefined   eg undefined  

              VARAIBLES and THIER SYNTEX WITH DATATYPE
variables are container that stores values ie DATATYPE   that we can use later
e.g                                Notes
1. var username = "onyebuchi";   {is a strings}
2. var password = 34423;       {is a number}
3. var isAdorable = true;        {is a booleans  }
    HOW to update a varible 
  name = "paulson";
CONVENTION OT NAMING VARAIABLE
1 kabacas or dash case var user-name
2 camelcase            var userName
3  snake_case           var user_name
    

  USEFULL BUILT IN METHOD
clear is a method to clear the console;
1.alert
2.prompt
3.console.log

 ALERT: pups up a message to a user
 print an information to a users that will display on screen 
    eg alert("hello there");
  

CONSOLE.LOG:  to print to the javescript console ie to ourself
    eg console.log("hello")

PROMPT:  to  get inputs from users
    eg prompt("what is your name");
 prompt can also be stored in a variable 
    eg var userName = prompt("what is your name");
    

   USING JAVASCRIPT IN A SEPARATE FILE(TEXT EDITOR) 
   

open a file a save as demo.js 
type the following js code inside the file
var userName = prompt("what is your name?");
alert("nice to  meet you " + userName );
   

     STALKER EXERCISE
    T0 fill input firtname, lastname and age and print out the fullname and age 

// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");
// var age = prompt("what is your age?");
// alert( "your full name is " + firstName + " " + lastName);
// alert( "you are " + age + "years old");
// console.log("user full name is " + firstName + " " + lastName);
// console.log("your are " + age + " years old" ); 
  

         AGE CALCULTOR EXERCISE
 to convert age to days
// var age = prompt("what is your age");
// var days = age * 365;
// alert(age + " " + "is roughly " + days + " " + "days"); 
 


  
    
        BOOLEAN OPERATOR
 ASSUME WHEN X= 5

OPERATOR      NAME                EXAMPLE   RESULT
>       GREATER THAN            X > 10     FALSE 
>=      GREATER THAN EQUALE TO  X>=5       TRUE
<       LESS THAN               x<=50      FALSE
<=      LESS THAN EQUAL TO      x<=100     TRUE
==      EQUALE TO               x===''     TRUE
!=      NOT EQUALE TO           X!="B"     TRUE
===      EQUAL VALUE AND TYPE    X===5      FALSE
!==     NOT EQUALE VALUE OR EQUALE TYPE    TRUE


      LOGICAL OPERATOR(AND OR NOT)(ASSUMING X=5 ANS Y=9)
OPERATOR    NAME      EXAMPLE         RESULT
&&          AND         X<10&&X!==5   FALSE (AND is true when both side is true ans false even though one side is true)
||          OR          Y>9||X===5     TRUE (OR is true when one side is true) 
!           NOT         !(x===Y)       TRUE (nagade the whole statment that was true to false when we apply the naged  sign )



THRUTY AND FALSY VALUE

FALSE VALUE

FALSE 
0
""
NULL
UNDERLINE
NAN

Everything else is truthy
 
  JavaScript  CONDITIONALS STATEMENT(ERRO OR SUCCEss MESSAGE)

(1)IF: IT TAKE A SINGLE STATEMENNT EITHER TRUE OR FASLE
        it will print out when it is true
    eg:  if(age < 18){
       console.log("sorry you canot enter the venue");
}
(2)ELSE IF : it is a secondary statement like  IF that
    eg :  if(age < 18 && age < 21 ){
       console.log("sorry you canot enter the venue");
} 
   eg: else if(age < 21 ){
       console.log("sorry you cannot enter the venue but you cannot drink");
} 

(3)ELSE:  it either IF and ELSE IF  is false it will print the 
   else{
       console.log("come in you, you can drink");
}


         JAVASCRIPT LOOPS(WHILE LOOPS)
it helps us not to repeat code using loops
      type of loops
1. while loop run some repeat code while a condition is true
eg. print number from 1 to 5
 var count = 1;
while(count < 6){
   console.log("count is: " + count)
   count++; (increment)
 }
or use
var count = 1;
while(count < 6){
   alert("count is: " + count)
   count++;
 }
 eg. print number from 5 to 20 and add 2
 var count = 1;
while(count < 6){
   console.log("count is: " + count)
   count+=;(increment +2)
 }
a 2. while loop 
 eg.print  character seperatly


 }
   

example on 'while' loop 
 // annoy matics
  // var ans = prompt("are we there yet?");
  // while (ans !== "yes" && ans !== "yeah" && ans !== "enter" ) {
  //   var ans = prompt("are we there yet???");
  // }
  // alert("we made it");

   
  // version 2 annoy matics provides yes is in the statement
  // var ans = prompt("are we there yet?");
  // while (ans.indexOf("yes") === -1 ) {
  //   var ans = prompt("are we there yet???");
  // }
  // alert("we made it");



         JAVASCRIPT  'FOR' LOOPS
another way of repeating code
   

example
for (var count = 0; count < 20; count++) {
  console.log(count);
  
}




          FUNCTIONS
fuction let us wrap reuseable code theya are one of the building block of JS
(1) you declare a function and register it wit ()i.e dosomething()


(2)then call it
dosomething();
// input and display
// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");
// var age = prompt("what is your age?");
// alert( "your full name is " + firstName + " " + lastName);
// alert( "you are " + age + "years old");
// console.log("user full name is " + firstName + " " + lastName);
// console.log("your are " + age + " years old" ); 

// age calculator
// var age = prompt("what is your age");
// var days = age * 365;
// alert(age + " " + "is roughly " + days + " " + "days"); 
   // while count 
// var count = 1;
// while(count < 6){
//    prompt("count  is: " + count)
//    count++;
//  }
     // annoy matics
  // var ans = prompt("are we there yet?");
  // while (ans !== "yes" && ans !== "yeah" && ans !== "enter" ) {
  //   var ans = prompt("are we there yet???");
  // }
  // alert("we made it");

   
  // version 2 annoy matics provides yes is in the statement
  // var ans = prompt("are we there yet?"); 
  // while (ans.indexOf("yes") === -1 ) {
  //   var ans = prompt("are we there yet???");
  // }
  // alert("we made it");

  // for loop example
// for (var count = 0; count < 20; count++) {
//   console.log(count);
  
// }
// function whatsup(name) {
//   prompt("am good thanks " + name);
//   alert("am good thanks " + name);
// } \
            AURGUMENT

//   function greet(person1, person2, person3 ){
  // console.log("hi " + person1);
 //  console.log("hi " + person2);
 //  console.log("hi " + person3);
//  }
//   greet("janes", "pater", "henry");


// whatsup("paulson");
// function add(x,y) {
//   prompt("answers is: " + x +);
 
// } 
// add("4,6"); 
// function ans(x, y) {
//   alert( x * y);
 
// } 
// ans(2,5);

// function ans(x, y) {
//   alert( x * y);
 
// } 
// ans(2,5);

// function ans(x, y) {
//   alert( x / y);
 
// } 
// ans(2,5);
// "the answer is:" + ans(2,10);
// function singsong() {
//   alert("twinkle twinkle little star");
//   alert("how are wonder what yur are");
//   alert("twinkle twinkle little star" );

  
// }
// var phrase = "hi there!"
// function saysomethin() {
//   var phrase = "good by!";
//   console.log("phrase");
// }
// function solve(x, y, a, b) {
//   return(x/y+a/b);
 
// }
// var sayit = "hi there"
// function solveit() {
//   var sayit = "whatsup"
//   console.log(sayit);
// }

          ARRARY[](there are use to store data, thera are indexed starting from 01234 for colors and 012345 for num)

    
            
//  var colors = [ "red", "white", "blue", "yellow", "green"]
//  var num = [3, 43, 45, 34, 5,3]

      
           ARRAYS METHOD

push: is use to ADD  to end of an array
pop: to REMOVE the last item on an array
unshift is use to ADD item to the front of an array
shift is use to REMOVE firstt items in an array
IndexOf is use to find the index number in an array[2]
Slice is use to copyout or cutout index in an array eg[1,3]
    var colors = [ "red", "white", "blue", "yellow", "green"]
//  color.pop()
//  colors.push("red"), colors.push("red", "black")
//  colors.shift()
//  colors.unshift("black","white","grey")
//  colors.indexOf("black")
//  colors.indexOf[2]
//  var nums = [3, 43,"g", "a","t", 45, 34, 5,3]

           
             Nested Arrays(that is nesting an array inside an array)

//  var char =[
//             [3, 43,"black", "grey","white", 45, 34, 5,3],
//             [3, 43,"green", "red","blue", 45, 34, 5,3],
//             [3, "jame","peter", "john","terry", 45, 34, 5,3]    
//           ];
       char[3][6]; 
         
       FOR LOOP WITH ARRAY (TO loop withe array)


var colors=["red", "blue","black", "grey","white"]
for (var print = 0; print<colors.length; print++ ){
console.log(colors[print]);
} 



FOR EACH LOOP With ARRAYS
  

var colors=["red", "blue","black", "grey","white"]
colors.forEach(function(print)
{
console.log("inside the foreach " + print );
})
  
 printReverse() it print array in reverse order
 isUniform() reture true if array is identical
 sumArray() SUm number of array and return
max() accept array of number and and return tha maximum number



       
            OBJECT

//  var biodata = {
//    name: "paul", 
//    sex: "male",
//    city:"warri",
       age: 56
//  } 
   

     console.log(biodata.name);
         or
      console.log(biodata["name"])

         to update
person["age"] += 1;
person.city = "london";
           


//  biodata.name  
//  var skillset = {
//        java: "pro",
//        css: "master",
//        html:"master",
//        php:"master"  
//  }
//  var studentInfo = [
//   {
//     name: "paul",   
//     sex: "male",
//     city:"warri",
//     age: "26"
//   },
//   {
    
//     name: "buchi",   
//     sex: "male",
//     city:"lagos",
//     age: "25"
//   },
//   {
    
//     name: "joy",   
//     sex: "female",
//     city:"Abia",
//     age: "28"
//   }
  
// ];
// var obj = {
//   name: "ken",
//   age: 32,
//   isCool: false,
//   friends: ["henry", "terry", "lucy"],
//   add: function (x,y) {
//     console.log(" whats up");
//   }
// }
// var obj2 = {};
// obj2.speak = function(){
//   return "whoof";
// }
// age: "32"
// isCool: "false"
// friends: ["henry", "terry", "lucy"]


function callit(x,y){
  console.log(x+y);
}
function sayhello (name) {
  console.log("hello there " + name);
  }
  //  jvav script object
  var studentInfo = {
     name: "paul",
     age: 23,
     dept: " elect/elect",
     level: "hnd2",
     state-of-irigin: "delta state",


  }
  //javascript  arrays meyhod 2
  var post =[
        "user1", 
        "user2",
        "user3",
        "user4" 
  ] 
  // javacscript arrays nested in object
  var studentInfo = [

    {
      name: "paul okofu",
      Dept: "electrical enginering",
      level: "hnd2",
      age:26,
       sex: "male",
      state_of_origin: "delta state"

    },
    {
      name: "lucy henry",
      Dept: "electrical enginering",
      level: "hnd2",
      age:26,
      sex: "female",
      state_of_origin: "delta state"

    },
    {
      name: "paul okofu",
      Dept: "electrical enginering",
      level: "hnd2",
      age:26,
       sex: "male",
      state_of_origin: "delta state"

    }, 
    {
      name: "lucy henry",
      Dept: "electrical enginering",
      level: "hnd2",
      age:26,
      sex: "female",
      state_of_origin: "delta state",
      grade: ["pass", "upper", "lower", "distinction"]

    }      
  ]
  // js methods (adding methods to obj)
var obj ={
  name: "paul",
  sex: "male",
  qualification: "hnd",
  state_of_origin: "delta state",
  friends:["james", "peter"],
  add: function(x,y){
    return x+y; 
  }
}
var biodata = {
  firstName: "paulson",
  lastName: "okofu",
  age:26,
  state_of_origin: "delta state",
  skil:["html5", "css3", "javascript", "php"],
  add: function(){
    return "hello + biodata";
  }
}
//Namespacing to call it use user.delete();
 var post = {};
post.delete = function(){
  return "posts  is deleted";
}

var user = {};
user.delete = function(){
  return  "user is deleted";
}

// "this" keyword u can use el or element arrays or items
var comments = {}; // this is an object empty
 
var arr = [
  "paul",
  "peter",
  "james",
  "timi",
  "henry"
]
var obj = {
  name: "james",
  color: "black",
  height: "34mm",
  sex: "male",
  address:"delta state",
  skill:["html5", "css3", "javascript", "php"]
}
var biodata = [ 
  {
  name: "jkelvin",
  color: "blue",
  height: "34mm",
  sex: "male",
  address:"kano state",
  skill:["html5", "css3", "javascript", "php"]
  
  },
  {
  name: "kate",
  color: "yellow",
  height: "34mm",
  sex: "female",
  address:"kogi state",
  skill:["html5", "css3", "javascript", "php"]
  },
  {
  name: "marvis",
  color: "red",
  height: "34mm",
  sex: "male",
  address:"edo state",
  skill:["html5", "css3", "javascript", "php"]
  },
  {
  name: "henry",
  color: "green",
  height: "34mm",
  sex: "male",
  address:"imo state",
  skill:["html5", "css3", "javascript", "php"]
  }
]
biodata[2].skill[1];

var someobj = {
  friends: [
    {name: "henry"},
    {name: "john"},
    {name: "kelvin"}
  ],
  color: "black",
  confirm: true

};
Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}

// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
 var biodata = {};
 biodata.result = ["MAT343 AB", "EE232 AC", "EED 2324","MAT343 AB", "EE232 AC", "EED 2324"]
 biodata.skill = ["html5", "css3", "javascript", "php"]
 biodata.print = function (){
   this.result.forEach(function(el){
console.log(el);
 
   });
   this.skill.forEach(function(el){
    console.log(el);
   });
 }
  var post = [
    {
      books: "luck boy",
      author: "ben  
      date: 3-9-2019,
      comments:["good", "poor", "fair"]
    },
    {
       books: "eze go school",
      author: "kalu james",
      date: 3-9-2019,
      comments:["good", "poor", "fair"]
    },
    {
     books: "root",
     author: "ganni henry",
     date: 3-9-20,
     comments:["good", "poor", "fair"]
    }
  ]
   var x = 3;
  var y = "a";
  y === "b" || x >= 3
  var x = 3;
  var y = 8;
 !(x=="3"|| x === y ) && !(y != 8 && x <= y )
var count = 1;
while(count < 6 ){
  console.log("count is " + count);
}
var add = 1;
while(add < 6 ){
  console.log("answer  is " + add);
  add++;
}  
// BOUNCER VENUE FO 18
var age = 18;
var yourAge = prompt("what is your age")
if(Number(yourAge) === age){
  alert("you can enter but can not buy");
}
else if(Number(yourAge)< age){
  alert("your cannot enter");
}

else if(Number(yourAge) > age){
alert("your can enter");
}
  // GUESS NUMBER GAME
  var secretNumber = 4;
  var guess = prompt("guess a number");
  if(Number(guess) === secretNumber){
  alert("you guess wright !!");
  }
  else if(Number(guess) < secretNumber){
  alert("number too low guess again");
  }
  else if(Number(guess) > secretNumber){
  alert("number too HIGH guess again");
  }
  var add = 1;
  while(add < 6){
    console.log("addition is " + add );
    add++ 
  }
  var add = 1;
  while(add <= 10){
    console.log("addition is " + add );
    add+= 2;
  }  
  var age = 18;
  var yourAge = prompt("what is you age");

    var secretNumber = 4;
  var guess = prompt("guess a number");
  while(secretNumber !== guess){
    alert("try again");
  }
  if(Number(guess) === secretNumber){
  alert("you guess wright !!");
  }
  else if(Number(guess) < secretNumber){
  alert("number too low guess again");
  }
  else if(Number(guess) > secretNumber){
  alert("number too HIGH guess again");
  }
var body =   document.querySelector("body");
var isBlue = false;
?
setInterval  (function(){
  if (isBlue) {
    body.style.background = "white";
  } else if (isBlue)
  {
    body.style.background = "red";
  }
  isBlue = !isBlue;
}, 2 );
   

    FOR EACH WITH FUNCTION AND ARROW KEY
const comp = [
    {name:"john", sex:"female", state:"deltA"},
    {name:"paul", sex:"male", state:"aba"},
    {name:"msps", sex:"female", state:"ebonyi"},
    {name:"maks", sex:"male", state:"benin"}
];
comp.forEach(function(compselected){
    console.log(compselected.name);
});

comp.forEach((compselected) => {
    console.log(compselected.state);
});
comp.forEach((compselected) => {
    console.log(compselected.sex);
});

             OR

comp.forEach(compselected => {
    console.log(compselected.state);
});
comp.forEach(compselected => {
    console.log(compselected.sex);
});


      fiter with condition(if) and with conditi
note: filter is to pick during looping

const ages = [31, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 const canDrink =   ages.filter(function(age){
     if(age >= 21){
       return true;
     }
     
 }); 

       without condition statement(without if)
        
 const canDrink =   ages.filter(age => age >= 21);
 console.log(canDrink);  

    FILTER WITH WITHIN AN ARRAy and pick property(sex) and certain string( ie pick male btw male and female)

const comp = [
    {name:"john", sex:"female", state:"deltA"},
    {name:"paul", sex:"male", state:"aba"},
    {name:"msps", sex:"female", state:"ebonyi"},
    {name:"maks", sex:"male", state:"benin"},
    {name:"maks", sex:"male", state:"anabra"},
    {name:"maks", sex:"female", state:"kogi"},
    {name:"maks", sex:"male", state:"jos"},
    {name:"maks", sex:"female", state:"benin"}
];


const comFemale   = comp.filter(compi => compi.sex === "female");
console.log(comFemale);

   loop through passing twwo condition using filter


const comp = [
    {name:"john", sex:"female", state:"deltA", start: "1990"},
    {name:"paul", sex:"male", state:"aba", start: "1890"},
    {name:"msps", sex:"female", state:"ebonyi", start: "1790"},
    {name:"maks", sex:"male", state:"benin", start: "1890"},
    {name:"maks", sex:"male", state:"anabra", start: "2020"},
    {name:"maks", sex:"female", state:"kogi", start: "1991"},
    {name:"maks", sex:"male", state:"jos", start: "1994"},
    {name:"maks", sex:"female", state:"benin", start: "2053"}
];


const comeighties   = comp.filter(compi => (compi.start >= 1890 && compi.start < 2060));
console.log(comeighties);


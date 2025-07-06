/*let,const,var
let=variable cannot be re-declared but can be updated . A block scope variable 

const= variable cannot be re-declared or updated . A block scope variable
Always use const if the type should not be changed (Arrays and Objects)

var= currently have no more use variable can be re-declared and updated . A global scope variable

variable declaration use let keyward can change value at the runtime 
let name="sham";

cannot redeclared and cannot change the value
const PI=3.14;

var keyward can change value at the runtime 
var 


Datatype 
primitive(7)
(1)Number = let age =19;
(2) String = let name="sham";
(3) Boolean = let isFollow=true;
(4)undefined = let a;
(5)null = let b=null;
(6)BigInt = let x=BigInt("7");
(7) Symbol let y=Symbol("hello")




# (non-primitive)= object 

object is a collection of data
 
and store the value in key pairs 
like= key:value like= age:19;

const variable la change kru shkt nahi pn
const objectla kru shkto
*/

// const product = {
//   title: "Ball pen",
//   rating: 4,
//   offer: 5,
//   price: 574,
// };

// console.log(product);
// for(let obj in product){
//     console.log(obj,product[obj]);
// }
// const profile = {
//   username: "sham",
//   followers: 700,
//   follwing: 600,
//   post: 70,
//   isfollow: true,
// };

/*jr followr vadle tr 
profile["followers"]=profile["followers"]+1;
aas kelyne ek ne vadte
console.log(profile);*/

//operator

// let a = 5;
// let b = 10;

// console.log("a+b:", a + b);
// console.log("a-b:", a - b);
// console.log("a*b:", a * b);
// console.log("a/b:", a / b);
// console.log("a%b:", a % b);
// console.log("a ** b", a ** b); // expontial operator a cha power b mean a*a*a*a*a*a*a*a*a*a*a

//increment (unary operator)
//post increment hi tya line la increment krt nahi ti dusrya line la increment hote

//pre increment ++a
// a++;
// console.log(a);

//decrement
//same as  the

//Assignment operator
// -=,+=,*=,%=,**=
// let c = 4;
// c -= 1;
// console.log(c);

// comparison operator
// ==, equal to and type === , not equal to !=, not equal to and type !==, <, >,

// let a1 = 4;
// let b1 = 5;
// console.log("a1==b1", a1 == b1);

// logical operator
// && ,||,!

// let x = 10;
// let y = 11;

//  &&
// In logical && both condition is true then result is true otherwise false
// console.log(x < y && x < y);

// ||
// In logical || both condition is false then result is false otherwise true
// console.log(x < y || x > y);


// reverse the result it means when condition is true he is convert into the false
// console.log(!(x < y));

// Condition statement

// if statement :-

//et mode="light-mode";
//var color;
//if(mode == "light-mode"){
//  color="Dark-mode";
//}

//console.log(color);

//  if else statement

//let modes="light-mode";
//var color;
//if(modes == "Dark-mode"){
//  color="black-mode";
//}
//else
//{
//  color="white-mode";
//}

//console.log(color);

// else - if - statement

//let age=62;

//if(age<18){
//  console.log("Junior");
//}else if(age<60){
//  console.log("senior");
//}else{
//  console.log("Middle");
//}

// Ternary operator
// condition ? " true block " : " false block";

/*let A=10,B=20;

A>B? console.log(" a is grater "): console.log(" b is grater");*/

/*
let math=parseFloat (prompt("enter the math mark"));
let physics=parseFloat (prompt("enter the physics mark"));
let chemistry=parseFloat (prompt("enter the chemistry mark"));
let biology=parseFloat (prompt("enter the biology mark"));
let history=parseFloat (prompt("enter the history mark"));
let economics=parseFloat (prompt("enter the economic mark"));

let total=math+physics+chemistry+biology+history+economics;

let percent= total / 600 * 100;
console.log(percent);

if(percent>80 && percent<100){
    console.log("A grade");
}else if(percent>60 && percent<80){
    console.log("B grade");
}else if(percent>40 && percent<60){
    console.log("C grade");
}*/

// Loop :- the loop can be define the same process multiped time until specific condition is satisfies

// For loop

// for(let i=1;i<10;i++){
// console.log("sham")
//}

//for(let i=1;i<10;i++){
//  console.log("hii iam sham");
//}

// while loop
//let i=1
//while(i<10){
//  console.log("sham");
//i++;
//}

// Do-while loop
//

//let i=1;
//do
//{
//i++;
//}
//while(i<10);

//for-of Loop

// these are use to String and Array
//syntax:

// for(let val of strVar){
//   do some work
// }

//let name="sham";
//let length=0;
//for(let i of name){
//console.log(i);
//  length++;
//}
//console.log(length);
//4
//output
// i= s
// i= h
// i= m
// i= a

// for in loop
// these are used to Object and array
// for in loop return the key

// student [key] use for the find the value of the key
// let student = {
//   name: "sham",
//   age: 19,
//   cgpa: 7.5,
//   ispass: true,
// };
// console.log(student.name);
// for (let key in student) {
//   console.log("key =", key, "values =", student[key]);
// }

// practice  question
// for(let i=1;i<=100;i++){
//   if(i % 2!=0){
//     console.log("odd no:",i);
//   }
// }

// let guessvalue = 25;
// let num = parseInt(prompt("guess the value :-"));

// while (num != guessvalue) {
//   num = parseInt(prompt("You entered wrong number. Guess again"));
// }

// console.log("congratulation you guess right value");

// String :- string is a sequence of character used to repersent text

// create string
// let str="sham chapakande";
// console.log(str);

// string length
// str.length
// console.log(str.length);

// string index
// str[o],str[1],str[2]
// console.log("index",str[0],str[14]);

// Template literals
//these are represent by :-  ` ` backtics this sign
//A way to have embedded expressions in strings

// let specialString=`This is template literals`;
// console.log(specialString);

// let obj={
//     item:"pen",
//     cost:10,
// };
// console.log("the cost of",obj.item,"is",obj.cost);

//instead of these use following
// let literals= `the cost of ${obj.item} is ${obj.cost} `;
// console.log(literals);

// and also ${1+2+3}; value calculate hona aani ti string madhe conver honar

//Ecape character:- \n
// let str=" sham \n chapakande";
// console.log(str);

//length hi \n la 1 character dhrte
// console.log(str.length);

// String mehtod
// string method he origionl strring la change krt nahit te navin string tyar krtat  aani string hi immutable aaste
// let str="  sham  ";
//  str=str.toUpperCase();
//  console.log(str);
//  console.log("To uppercase method :-",str.toUpperCase());
//  console.log("To lower case method",str.toLowerCase());
//  console.log("String length :-",str.length);
//  console.log(str.trim()); // remove whitespaces starting aani end cha white spacd delete krto
//  console.log(str);

// slice() method
// hi method string la kapte first for selecting and second is till where
//  let string="shamchapakande";
//  string=string.slice(5,8);
//  console.log(string);

// concate() method

// let str1="sham";
// let str2="chapakanade";
// let result=str1.concat(str2);
// or
// //let resut=str1+str2;
// console.log(result);

//replace() method
//replaceAll() method

// let str1="hello";
// console.log(str1.replace("h","y"));

// charAt(index)()
// var str="ilove java";
// console.log(str.charAt(1));
// console.log(str[0]);

// let fullname = prompt("enter your full name");
// let username = "@" + fullname + fullname.length;
// console.log(username);

function showfunction() {
  let name = prompt("enter your name");
  document.getElementById("message").innerText = `Hey ${name} welcome to site`;
}

// array is special type of object but not use key pairs use index value
// let mark=[50,76,84,97,54,71];
// console.log(mark);

// let student=["sham","vijay","ajay","ganesh"];
// console.log(student);

// //Array indices arr[0]
// console.log(student[2]);

// // jr value la change kraych aasel tr
// student[0]="ram";
// console.log(student);

// Looping over array
// let element=[1,9,2,5,6,4,7,8,3];
// for(let i of element)
// {
//     console.log(i);
// }

// for(let j=0;j<element.length;j++){
//     console.log([j]);
// }

// let marks=[54,77,85,43,64,74];
// let total=0;
// for(let m of marks){
//     total+=m;
// }

// let average=total/marks.length;
// console.log(average);

// let arr=[250,350,120,320,400];
// let i=0;
// for(let val of arr){
//     let offer=val/10;
//     arr[i]-=offer;
//     console.log(arr[i]);
// }

// // Array method he all small case ne chalu hotat

// let Heros=["iron_man","thor","hulk","captan_america"];
// Heros.push("sham");
// console.log(Heros);
// // pop () he delete krte last kdun
// let deleted=Heros.pop();
// console.log(Heros);
// console.log(deleted);
// console.log(Heros.toString());

// let acters=["tony star","shubham","ram","vishal"];

// concat() he ek 2 array la concat krte
// console.log(Heros.concat(acters));

//unshift ya madhe enter kelela element ha ek no la yeun bsto
// acters.unshift("antman");
// console.log(acters);

// shift ya ne ek no cha elemtn ha delete hoto
// acters.shift();
// console.log(acters);

// slice()
// ya madhe index no 0 to 2 means 2 nahi genar 1 ne kmi
// jevda tumala pahijel tevda
//console.log(acters.slice(0,2));

//splice () are use to changing origional array
// syntax :-  splice(stareindex,deleteindex , addnew element)
// startindex= select the index you want to delete means starting point
// (2)delete index : select 1,2,3,4 you want to delete
//(3)adding new element to the deleted index

//  let no=[1,2,3,4,5,6,7];
// no.splice(2,2,101,102);
// console.log(no);

// // Add element you want to change only one no
//  no.splice(2,0,111);
//  console.log(no);

// // Delete element
// no.splice(1,1);
// console.log(no);

// //Replace items
// no.splice(4,0,5);
// console.log(no);

// // when you pass only one parameter like as 5 further element automaticall deleted
// let a=[1,2,3,4,5,6,7,8,9,10];
// a.splice(5);
// console.log(a);

// let company=["microsoft","Google","facebook","instagram"];
// company.shift();
// console.log(company);

// company.unshift("Shams technologies");
// console.log(company);

// company.push("Amazon");
// console.log(company);

// Function:- is a self contain block of code that performs specific task in the program is called as the function

// syntax :

//function definition

//function functionName(parameter1 ,parameter2){
// do some work
//}

//function call

//functionName();

// function addition(a,b){
//     console.log(a+b);
// }
// addition(4,5);

// function sub(x,y){
//     return x-y;

//     //# after the return cannot write any code in the function
// }
// console.log(sub(4,5));

// //arrowfunction
// const arrowfunction=(x,y)=>{
//    return x*y;
// };
// console.log(arrowfunction(4,4));

// function vowals(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowals("sham");

// const vowal = (str) => {
//     let counts = 0;
//     for (let char of str) {
//         switch (char) {
//             case 'a':
//                 console.log("a is present");
//                 break;

//             case 'e':
//                 console.log("e is present");
//                 break;

//             case 'i':
//                 console.log("i is present");
//                 break;

//             case 'o':
//                 console.log("o is present");
//                 break;

//             case 'u':
//                 console.log("u is present");
//                 break;

//             default:
//                 console.log("wrong choice");
//                 break;
//         }
//     }
// }

// vowal("aeiou");

//         DOM (document object model)

//  Pillor of dom
// (1) Selection of an Element = var a document.querySelector("he")
// (2) changing HTML = a.innerHTML="his fsdjfkj"
// (3) changing CSS  = a.style.color="black"
// (4) Event Listener =a.addEventListener("click",function(){})

// let a=document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML="Yes this is simple web page"
//     a.style.backgroundColor="grey"
// })
let a=document.querySelector("h1")
a.addEventListener("click",function(){
    a.innerHTML="kfdjalksj"
    a.style.backgroundColor="green"
})
//   DOM  DOCUMENT OBJECT MODEL

let d = document.getElementById("message");
d.style.backgroundColor = "black";
d.style.color = "white";
d.style.fontFamily = "bold";

//  let p=document.querySelector('.promo')
//  //console.log(p)
// p.innerHTML="<h3> WELCOME </h3>"
// p.style.color="red"

var id=document.querySelector("#idmethod");
id.innerHTML="this is id method";


var cs=document.querySelector(".cls");
cs.innerHTML="this is class method";

var para=document.querySelector("p");
para.addEventListener("click",()=>{
    para.innerHTML="this is paragraph"
});


var btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    btn.innerHTML="thanks";
})



var items=document.getElementsByClassName('list-item');
items[0].textContent='GRAPHICS'
items[0].style.fontWeight="bold"

for(var i=0;i<items.length;i++) {
    items[i].style.backgroundColor="yellow"
}

var li=document.getElementsByTagName('li');
li[0].style.backgroundColor="red";

var item=document.getElementById('item')
item.style.fontWeight="bold"


var g=document.getElementsByClassName("text=matter");
g.innerHTML="<p>thanks to you</p>";
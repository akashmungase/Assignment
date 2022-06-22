function myGraduation(){
    console.log("1. function with no argument and no return value: Graduation B.Tech ");
    
}
myGraduation();


function myName(firstName,lastName){
    var conCate =firstName+lastName;
    console.log(`2. Function with two argument and log on console : ${conCate}`);
}
myName("Akash","Mungase");



function countWord(stringValue){
 return stringValue.split(" ").length;
}
console.log("3.1 Total word Count given in the String 'I am learning JavaScript': ", countWord("I am learning JavaScript"));

console.log("3.2  Total word Count given in the String 'Soon I am going to be IT camp': ", countWord("Soon I am going to be IT camp"));

function swapUsingThirdVariable(a,b){
    console.log("4. Before swap value: ",a,b);
    var c = a;
    var a = b;
    console.log(`After swap value, ${a} ${c}`);
}
swapUsingThirdVariable("Virat","Anushka");

function swapWithoutUsingThirdVariable(number1,number2){
   console.log("5. Before swap value",number1,number2);
  var  number1 = number1 + number2;
  var  number2 = number1 - number2;
  var  number1 = number1 - number2;
    console.log(`After swap value: ${number1} ${number2}`);
}
swapWithoutUsingThirdVariable(555,444);

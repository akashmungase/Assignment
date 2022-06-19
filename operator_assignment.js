console.log("<******* Assignment JS Operator **********>")

var x=45; var y=38;
var result1 = 45>38 ? " Greatest number amongst (45,38) is 45" : " Greatest number amongst (45,38) is 38";
console.log("1.",result1);

var a=29%2; var b=44%2;
var result2 = a==0 ? "29 is even number" : "29 is odd number";
var result3 = b==0 ? "44 is even number" : "44 is odd number";
console.log("2.",result2);
console.log("2.1.",result3);

var number1=132;
console.log("3.",number1>=132 ? "132 is greater than or equal to 132" : "32 is not greater than or equal to 132");

var p1=-33; var p2=179; var p3=0; var p4=45.89;
console.log("4.", p1>0 ? "-33 is positive number" : "-33 is negative number");
console.log("4.1.", p2>0 ? "179 is positive number" : "179 is negative number");
console.log("4.2.", p3==0 ? "0 is neither positive nor negative number" : "0 is negative number");
console.log("4.3.", p4>0 ? "45.89 is positive number" : "45.89 is negative number");

var isGendermale = true;
var isAge21plus = true;
var result4 =isGendermale && isAge21plus ? "Hey boy you are eligible for Marriage " : " not eligible for Marriage ";
console.log("5.",result4);

var isGenderfemale = true;
var isAge18plus = false;
var result5 =isGenderfemale && isAge18plus ? "Hey girl you are eligible for Marriage " : " not eligible for Marriage ";
console.log("6.",result5);

var GraduationScore80plus = true;
var HSCScore90pluse = true; 
var result7 =GraduationScore80plus && HSCScore90pluse ? "You are eligible for TCS interview" : " Not eligible for TCS interview";
console.log("7.", result7);
var a = 0;
var b = false;
console.log(a == b ? "true" : "false");

var result1 = 0 == '';
console.log("0=='' :", result1);

var result2 = 0 == '0';
console.log("0=='0' :", result2);

var result3 = 0 == false;
console.log("0==false :", result2);

var result4 = null == undefined;
console.log("null==undefined :", result4);

var result5 = 1 == [1];
console.log("1==[1] :", result5);

var result6 = 1 == true;
console.log("1==true :", result6);

var result7 = 1 == '1';
console.log("1=='1' :", result7);


var a = 30;
var b = 50;
console.log("Before swaping", a, b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swaping", a, b);
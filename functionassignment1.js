function squareOfNumber(n) {
    return  n * n;
}
console.log("1. Square of number of 5:", squareOfNumber(5));
console.log("1. Square of number of 6:", squareOfNumber(6));
console.log("1. Square of number of 25:", squareOfNumber(25));
console.log("1. Square of number of 100:", squareOfNumber(100));

console.log(`2. Type of above function is: ${typeof squareOfNumber}`);

function areaOfTriangle(b, h) {
    return 0.5 * b * h;
}
console.log(`3. Area of triangle of base=45 and height=34 : ${areaOfTriangle(45,34)}`);

function checkNumber(a) {
    console.log("4. ", a==0? `${a} is zero` : a>0 ? `${a} is positive number` : `${a} is negative number`);
}
checkNumber(-56)
checkNumber(0.567)
checkNumber(890)
checkNumber(00)


function largestAmongThreeNumber(p,q,r){
    console.log("5. ",  p>q ? p>r ?  `${p} is largest` : `${q} is largest` :`${r} is largest`);
}
largestAmongThreeNumber(679,867,956)
largestAmongThreeNumber(3,2,1)

function variableIsUndefinedOrNull(value){
        
}

function checkLeapYear(y){
      console.log("7. ", y%4==0 ? `${y} This is leap year` : `${y} This is not leap year` )
}
checkLeapYear(2020)
checkLeapYear(1999)
checkLeapYear(2022)
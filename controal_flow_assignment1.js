function isEvenOrOddNumber(n){
    if (n%2==0) {
        console.log(`${n} is even number`);
    } else {
        console.log(`${n} is odd number`);
    }

}
isEvenOrOddNumber(45)
isEvenOrOddNumber(70)
isEvenOrOddNumber(67)
isEvenOrOddNumber(98)


function personCheckEligibleForVoteOrNot(p){
    if (p>=18){
        console.log(`age ${p} your are Eligible for Vote`);
    } else {
        console.log(`age ${p} your are not Eligible for Vote`);
    }
   
}
personCheckEligibleForVoteOrNot(18)
personCheckEligibleForVoteOrNot(20)
personCheckEligibleForVoteOrNot(17)
personCheckEligibleForVoteOrNot(40)

function stringContainMoreThan10Character(character){
  var x = character.split("").length;
  if (x>=10) {
    console.log(`"${character}" This string contain more than 10 character`);
  } else {
    console.log(`"${character}" This string not contain more than 10 character`);
  }
}
stringContainMoreThan10Character("JavaScript - ES6")

var stringStartWithJava = function show(s){
    var y = s.startsWith("Java");
       console.log(`This string starts with Java:  ${y} `)
}
stringStartWithJava("JavaScript Language");

var checkNumberEvenOrOdd = function display(r){
    if (r%2==0){
        console.log(`${r} is even number`);
    } else {
        console.log(`${r} is odd number`);
    }
}
checkNumberEvenOrOdd(2022);
checkNumberEvenOrOdd(123);
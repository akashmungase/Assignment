var string = " Hey you are doing good, keep it up  ";
console.log("1. ",string);
console.log("2. length of string: ", string.length);

var trimString = string.trim();
console.log("3. After removing leading and trailing extra spaces: ", trimString);
console.log("After removing spaces length of string: ",trimString.length);

console.log("4. total number of extra spaces count that is removed in trimString: ", string.length-trimString.length);

console.log("5. first character of trimString is: ", trimString.charAt(0),  " and last character of trimString is: ", trimString.charAt(34-1));

var splitString = trimString.split(" ");
console.log("split words in trimString: ", splitString);
console.log("6. total words available in the trimString: ", splitString.length);

var indexOfgood = string.indexOf("good");
console.log("7. index of word good form the given string: ", indexOfgood);

var subtrimString = trimString.slice(22);
console.log("8. subtrimString starting form index 22: ", subtrimString);

var endWithResult = trimString.endsWith("up");
console.log("9. given string end with word up: ", endWithResult);

var string1 = "150.356780";
var string2 = "527.0678945";
var string1Innumber1 = new Number(string1);
var string2Innumber2 = parseFloat(string2);
console.log("10. Addition of two string numbers: ",string1Innumber1+string2Innumber2);








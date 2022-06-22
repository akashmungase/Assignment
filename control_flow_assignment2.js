function toCheckEvenOddNumber(number1) {
    if (number1 % 2 == 0) {
        console.log(`${number1} is even number`);
    } else if (number1 % 2 != 0) {
        console.log(`${number1} is odd number`);
    }
}
toCheckEvenOddNumber(2);
toCheckEvenOddNumber(45);
toCheckEvenOddNumber(13);
toCheckEvenOddNumber(0);
toCheckEvenOddNumber(null);

console.log("================================")

function checkGrade(score) {
    if (score < 35) {
        console.log(`Score: ${score} Result is Failed`);
    } else if (score >= 60 && score< 75) {
        console.log(`Score: ${score} Result is Passed and Grade "B" `);
    } else if (score >= 35 && score < 60) {
        console.log(`Score: ${score} Result is Passed and Grade "C" `);
    } else if (score >= 75 && score < 90) {
        console.log(`Score: ${score} Result is Passed and Grade "A" `);
    }else if (score >= 90 && score < 100) {
        console.log(`Score: ${score} Result is Passed and Grade "A+" `);
    }else {
        console.log(`Invalid input`);
    }
}
checkGrade(30);
checkGrade(35);
checkGrade(45);
checkGrade(65);
checkGrade(77);
checkGrade(94);
checkGrade(102);
checkGrade("name");

var checkTypeOfGivenArg = function display(arg) {
    console.log(`Type of ${arg}: ${typeof(arg)}`);
}
checkTypeOfGivenArg(50);
checkTypeOfGivenArg(100);
checkTypeOfGivenArg(60.89);
checkTypeOfGivenArg(null);
checkTypeOfGivenArg(undefined);
checkTypeOfGivenArg(NaN);
checkTypeOfGivenArg("Hello");
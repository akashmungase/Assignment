function marriageEligibility(gender, age) {
    if (gender == "male" && age >= 21 && age < 50) {
        console.log(`Gender ${gender} Age: ${age} your are eligible for marriage`);
    } else if (gender == "female" && age >= 18 && age < 50) {
        console.log(`Gender ${gender} Age: ${age} your are eligible for marriage`);
    } else if (gender == "other" && age >= 21 && age < 50) {
        console.log(`Gender ${gender} Age: ${age} your are eligible for marriage`);
    } else {
        console.log(`Gender ${gender} Age: ${age} your are not eligible for marriage`);
    }
}
marriageEligibility("male", 17);
marriageEligibility("male", 25);
marriageEligibility("female", 28);
marriageEligibility("female", 16);
marriageEligibility("other", 35);
marriageEligibility("other", 41);
marriageEligibility("male", 60);
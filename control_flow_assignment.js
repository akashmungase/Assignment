let number = 1;
console.log(`1. Print numbers form 10 to 1 `)
for (let i = 10; i >= 1; i--) {
    console.log(` ${i}`);
}

console.log(`2. Find first 15 odd number `)
for (let index = 0; index <= 29; index++) {
    if (index % 2 != 0) {
        console.log(` ${index}`);
    }
}

console.log(`3. Find all prime numbers form 1 to 50 `)
for (let index = 2; index <50; index++) {
    for(j=2;j<=index;j++){
        if(index%j==0){
            break;
        }
    }

   if(index==j){
       console.log(index)
   }
}

console.log(`4. Print numbers form 30 to 20 `)
for (let i = 30; i >= 20; i--) {
    console.log(` ${i}`);
}

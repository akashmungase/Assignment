class bank {
    bankName;
    location;
    accountNo;
    ifsc;
    intrestRate;

    constructor(bankName,location,accountNo,ifsc,intrestRate){
        this.bankName  = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate;
    }
    showDetails(){
        console.log(`Bank details are bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc ${this.ifsc}, intrestRate ${this.intrestRate}`, );
    }
}

let bank1 = new bank("axisBank", "pune", "5245421541", "AXIS12452", "11%");
let bank2 = new bank("SBIBank", "Mangalwedha", "875845775", "BIK0000125", "10%");
let bank3 = new bank("iciciBank", "sangola", "215454169", "ICICI000586", "11.5%");
let bank4 = new bank("kotakBank", "solapur", "6578451456", "KOTAK000231", "12.5%");
let bank5 = new bank("HDFCBank", "pandharpur", "36254125697", "HDFC000254", "14.5%");
let bank6 = new bank("panjabBank", "Goa", "235468901", "PANJ0000237", "13.5");

bank1.showDetails();
bank2.showDetails();
bank3.showDetails();
bank4.showDetails();
bank5.showDetails();
bank6.showDetails();


const arrayOfBank = [];
arrayOfBank.push(bank1,bank2,bank3,bank4,bank5,bank6);
console.log(arrayOfBank);

for (let index = 0; index < arrayOfBank.length; index++) {
    const element = arrayOfBank[index];
    console.log(element);
}

console.log("1. All object  element added in array and just log on console bank name and location ");

for (let index = 0; index < arrayOfBank.length; index++) {
   console.log(`${arrayOfBank[index].bankName}  ${arrayOfBank[index].location}`)
    
}

const setOfBank = new Set();
setOfBank.add(bank1);
setOfBank.add(bank2);
setOfBank.add(bank3);
setOfBank.add(bank4);
setOfBank.add(bank5);
setOfBank.add(bank6);

console.log(setOfBank);

for (const iterator of setOfBank) {
    console.log(iterator);
}

console.log("2. All object  element added in set and traverse using for loop and just log on console bank name and ifsc code");
for (const iterator1 of setOfBank) {
    console.log(`${iterator1.bankName} ${iterator1.ifsc}`);
}

console.log("3. Map is created in a such a way that key should be bank and value is object that is created in step c")
const map_name = new Map();
map_name.set("SBI", "sbiBank");
map_name.set("axis", "axisBank");
map_name.set("icici", "iciciBank");
map_name.set("HDFC", "HDFCBank");
map_name.set("kotak", "kotakBank");
map_name.set("panjab", "panjabBank");


console.log(map_name);




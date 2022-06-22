class Vehicle {
    modelName;
    engine;
    mileage;
    maxPower;
    seats;

    constructor(modelName, engine, mileage, maxPower, seats) {
        this.modelName = modelName;
        this.engine = engine;
        this.mileage = mileage;
        this.maxPower = maxPower;
        this.seats = seats;
    }
    vehicleDetails() {
        console.log(`Vehicle details are  Model no:${this.modelName} Engine:${this.engine} Mileage:${this.mileage} Maxpower:${this.maxPower} Seats:${this.seats}`);

    }
}

let vehicle1 = new Vehicle("Ertiga LXI", "1462 cc", "20.3 kmpl", "101.65bhp", "7");
let vehicle2 = new Vehicle("Hyundai Creta", "1493 cc", "18.5 kmpl", "113.45bhp", "4");

vehicle1.vehicleDetails();
vehicle2.vehicleDetails();

class Bike {
    constructor(public price: number, public max_speed: number, public miles: 0) { }
    displayInfo = () => {
        console.log(`Price: $${this.price}, 
        Maximum Speed: ${this.max_speed}, 
        Miles: ${this.miles}`);
    }
    ride = () => {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse = () => {
        console.log("Reversing")
        if (this.miles < 5) {
            this.miles = 0
            return this
        }
            this.miles -= 5;
            return this;
        }
    }
const bike1 = new Bike(2000, 120, 0);
bike1.ride().ride().ride().reverse().displayInfo()
const bike2 = new Bike(4000, 170, 0);
bike2.ride().ride().reverse().reverse().displayInfo()
const bike3 = new Bike(10000, 220, 0);
bike3.reverse().reverse().reverse().displayInfo()
// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Truck from './Truck.js';
import Car from './Car.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle{
    // the class Motorbike extends the Vehicle class
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];

    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[]
    ) {
      // Call the constructor of the parent class, Vehicle
      super();
  
      // Initialize properties of the Car class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      // Check if the wheels array has 4 elements
      // If not, create 4 new Wheel objects
      // Otherwise, use the provided wheels array
      if (wheels.length !== 2) {
        this.wheels = [new Wheel(), new Wheel()];
      } else {
        this.wheels = wheels;
      }
    }

  
    // log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie (vehicle: Car | Truck | Motorbike): void {
      let make = vehicle.make;
      let model = vehicle.model;
      if (vehicle.wheels.length === 2) {
        console.log(`Motorbike ${make} ${model} is doing a wheelie!`)
      }
      else {
        console.log(`${make} ${model} is not a motorbike.`)
      }
  }


  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Motorbike class
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;

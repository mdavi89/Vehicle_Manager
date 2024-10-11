// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow{
  // Truck class Extends the Vehicle class, adding tow() and towingCapacity
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }


  // method to tow a Vehicle with a Truck
  tow(vehicle: Truck | Motorbike | Car): void {
    let make = vehicle.make;
    let model = vehicle.model;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // If it is, log that the vehicle is being towed
      console.log(`Your ${make} ${model} is being towed!`)
    } else {
      // If it is not, log that the vehicle is too heavy to be towed
      console.log(`Your ${make} ${model} is too heavy to be towed!`)
    }
  }

    override printDetails(): void {
      // Call the printDetails method of the parent class, Vehicle
      super.printDetails();
  
      // Print details of the Truck class
      console.log(`VIN: ${this.vin}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
      console.log(`Color: ${this.color}`);
      console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  
      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
      );
    }
  }


// Export the Truck class as the default export
export default Truck;

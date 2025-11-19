class Vehicle {
  #engineStatus = "off";

  engineStart() {
    console.log("engine started");
    this.#engineStatus = "on";
  }

  engineOff() {
    console.log("engine off");
    this.#engineStatus = "off";
  }

  engineStatus() {
    return this.#engineStatus;
  }
}

const vehicle1 = new Vehicle();

vehicle1.engineStart();

console.log(vehicle1.engineStatus());

vehicle1.engineOff();

console.log(vehicle1.engineStatus());

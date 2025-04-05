/* 
 */
class City {
  // Constructor
  constructor(name, gardenNumber) {
    this.name = name;
    this.gardenNumber = gardenNumber;
  }

  // Nested class: Garden
  Garden = class {
    constructor(name, waterNeeded) {
      this.name = name;
      this.waterNeeded = waterNeeded;
    }

    // Setter methods
    setName(name) {
      this.name = name;
    }

    setWaterNeeded(waterNeeded) {
      this.waterNeeded = waterNeeded;
    }

    // Getter methods
    getName() {
      return this.name;
    }

    getWater() {
      return this.waterNeeded;
    }

    // Other methods
    resetWater() {
      this.waterNeeded = 0;
    }
  };

  // Setter methods for City
  setName(name) {
    this.name = name;
  }

  setGardenNumber(gardenNumber) {
    this.gardenNumber = gardenNumber;
  }

  // Getter methods for City
  getName() {
    return this.name;
  }

  getGardenNumber() {
    return this.gardenNumber;
  }
}



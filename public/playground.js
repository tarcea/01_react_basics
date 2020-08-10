


class Car {
  constructor() {
    this.weels = 4;
    this.type = "Combi";
  }
}

class MiniCar extends Car {
  constructor() {
    super();
    this.windows = 6;
  }

}

const car = new Car();
const lastun = new MiniCar();

console.log(lastun.windows)


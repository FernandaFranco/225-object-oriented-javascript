function makeCar(acceleratingRate, brakingRate) {
  return {
    speed: 0,
    acceleratingRate: acceleratingRate,
    brakingRate: brakingRate,
    accelerate: function() {
      this.speed += this.acceleratingRate;
    },
    brake: function() {
      this.speed -= this.brakingRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);


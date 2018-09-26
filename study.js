// var Robot = {
//   init: function(name, occupation) {
//     this.name = name;
//     this.occupation = occupation;
//     return this;
//   },
//   sum: function(firstOperand, secondOperand) {
//     return firstOperand + secondOperand;
//   },
// };

// console.log(Robot.sum(2, 2));

// var r2d2 = Object.create(Robot).init('R2D2', 'helpful little fella');


function Robot(name, occupation) {
  this.name = name;
  this.occupation = occupation;
}

Robot.prototype.sum = function(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
};

var r2d2 = new Robot('R2D2', 'helpful little fella');

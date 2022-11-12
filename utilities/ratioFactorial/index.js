let fact = require("../factorial/index");
let rat = require("../ratio/index");
const ratioAndFactorial = (a, b, c) => {
  let x = {
    ratio: rat(a, b),
    factorial: fact(c),
  };
  return x;
};

module.exports = ratioAndFactorial;

/*function sayHello(name, age) {
  console.log("Hello!", name, "you have", age);
}

sayHello("Dayoung!", 23);
console.log("Hi");*/

/*function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetDayoung = sayHello("Dayoung", 23);
console.log(sayHello("Dayoung", 23));
console.log(greetDayoung);
//sayHello("dayoung", 23);*/

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  div: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 5);
const div = calculator.div(18, 3);
const power = calculator.power(3, 3);
console.log(plus);
console.log(minus);
console.log(div);
console.log(power);

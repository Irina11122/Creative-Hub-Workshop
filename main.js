let age = 19;
let checkAge = age > 18 ? "You can vote" : "You cannot vote";
console.log(checkAge);

let test = 100;

if (test <= 65) {
  console.log("You failed!");
} else if (test <= 100) {
  console.log("You passed!");
}

let checkTest = test <= 65 ? "You passed!" : "You failed!";
console.log(checkTest);

let temperature = 20;

if (temperature <= 25) {
  console.log("It's warm outside");
} else if (temperature <= 20) {
  console.log("It's cold outside");
}

let checkTemperature =
  temperature < 10 ? "It's warm outside" : "It's cold outside";
console.log(checkTemperature);

let price = 130;

if (price <= 100) {
  console.log("It's $10");
} else if (price >= 100) {
  console.log("The shipping is free");
}

let priceCheck = price < 100 ? "It's $10" : "The shipping is free";
console.log(priceCheck);

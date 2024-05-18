let price = 130;

if (price <= 100) {
  console.log("It's $10");
} else if (price >= 100) {
  console.log("The shipping is free");
}

let priceCheck = price < 100 ? "It's $10" : "The shipping is free";
console.log(priceCheck);

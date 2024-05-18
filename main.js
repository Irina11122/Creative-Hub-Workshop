let age = 18;
if (age <= 17) {
  console.log("You can't vote!");
} else if (age >= 18) {
  console.log("You can vote!");
}

let checkAge = age > 17 ? "You can vote" : "You cannot vote";
console.log(checkAge);

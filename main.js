let temperature = 20;

if (temperature <= 25) {
  console.log("It's warm outside");
} else if (temperature <= 20) {
  console.log("It's cold outside");
}

let checkTemperature =
  temperature < 10 ? "It's warm outside" : "It's cold outside";
console.log(checkTemperature);

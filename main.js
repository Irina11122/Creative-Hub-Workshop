let username = "admin";
let password = "adminpass";

if (username + password === "admin" + "adminpass") {
  console.log("Welcome admin");
} else if (username + password === "user123" + "password123") {
  console.log("Welcome, User123");
} else {
  console.log("Invalid username or password.");
}

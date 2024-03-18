const information = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, My name is ${information.profil.name} and my campus is the ${information.profil.campusName}`,
    e: "oO",
    T: "U ",
  })
);

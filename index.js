const student = require('./information');
const cowsay = require("cowsay");

const cow = cowsay.say({
  text: `My name is ${student.name} and my school is the ${student.school}`,
});

console.log(cow);
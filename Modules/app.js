let greeting = require ('./modules');
let user = require ('./modules');

console.log(greeting);
console.log(user);

const os = require("os");
let userName = os.userInfo().username;

/*console.log(`Date of request: ${greeting.date}`);
console.log(greeting.getMessage(userName));

let im = new user('Vitalii', 33);
im.sayHi();
im.displayInfo();*/

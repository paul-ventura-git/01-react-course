const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = `<h1>${text}</h1>`;

console.log(myElement);


const y = 5;

const otherElement = `<h1>${(y) < 10 ? "Hello" : "Goodbye"}</h1>`;

console.log(otherElement);
// match  method

let greeting = "hello goodMorning";

console.log(greeting.match("good"));

// if not match

console.log("if not match", greeting.match("abcd"));

// repeat example

let text = "abcd";

console.log(text.repeat(3));

// replace

text = "abcdabcda";

console.log(text.replace("a", "A"));

// replace all

console.log(text.replaceAll("a", "A"));

const text2 = "yxxyz";

console.log(text2.indexOf("x", 2));

console.log(text2.search("x"));

console.log("text", greeting);

console.log(greeting.slice(3));

console.log(greeting.slice(2, 8));

console.log(greeting.slice(-1));

let alphabet = "abcdefghi";

console.log(alphabet.split(" "));

console.log(alphabet.split(""));

console.log(alphabet.split("e"));

// starts with

console.log("starts with", alphabet.startsWith("a"));
console.log("starts with", alphabet.startsWith("z"));

// substring

console.log("substring", alphabet.substring(3));

console.log("substring", alphabet.substring(2, 5));

console.log("substring", alphabet.substring(-1));

console.log("substring", alphabet.substring(-5, 5));

// uppercase

console.log("uppercase", alphabet.toUpperCase());

alphabet = "ABCDEFGHI";

console.log("lower case", alphabet.toLowerCase());

// trim

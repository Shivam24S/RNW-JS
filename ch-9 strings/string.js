let text = "abcdefgh";

console.log("type", typeof text);

// charAt

console.log("char at", text.charAt(3));

// concat

console.log(text.concat("ijklmno"));

// endsWith

console.log("endWith  example", text.endsWith("h"));
console.log("endWith  example", text.endsWith("o"));

// includes

console.log("include example", text.includes("s"));

// index of

text = "acdabcda";

console.log("index of", text.indexOf("b"));

console.log("index of not available", text.indexOf("z"));

// last index

console.log("last index", text.lastIndexOf("a"));
console.log("last index", text.lastIndexOf("z"));

console.log("text-length", text.length);

// template literal

const name = "xyz";

const surname = "abcd";

console.log(
  "my name is " + " " + name + " and my surname is  " + " " + surname
);

console.log(`my name is${name} and my surname is${surname}`);

let paragraph = "abccdabcdbcahcbajc\n" + "abcdbacdancjdancj\n" + "abcdncjdcnj";

console.log(paragraph);

// now using backtick or template literals

paragraph = `abcdjncjdbcjb
acbdhcbndcc
nacjnasjcnsac
casncjsacn
`;

console.log("using backticks", paragraph);

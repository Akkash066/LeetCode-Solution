//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => () => "Hello World";

const f = createHelloWorld();
console.log(f());

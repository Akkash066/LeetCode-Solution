const createHelloWorld = () => () => "Hello World";

const f = createHelloWorld();
console.log(f());

console.log('Hello World!');

console.log(x);

 var x = 5;

console.log(x); 



example();

function example() {
    let x = 6;
    console.log(x);
}




// scope e closures
function example1() {
    var name = 'batman';

    function sayName() {
        console.log(name);
    }
    return sayName;
}

const foo = example1();

console.dir(foo);

console.log(example1);
console.log('Test');

// array
const arrayExample = [12,56,95,24];

const firstNumber = arrayExample[0];

// const red = 'red';


// oggetto
const objectExample = {
    color : 'red',
    size : 23,
    talk : function() {
        console.log('Hello World!')
    }
    // task() {
    //     console.log('Hello World!');
    // },
    // red, 
}

const color = objectExample.color; // leggo proprietà color dall'oggetto objectExample

objectExample.talk();

console.log(arrayExample.length);

const random = Math.random()* 100; // genera numero casuale tra 0 e 100

console.log(Math.floor(random));
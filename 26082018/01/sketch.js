/*  esercizio 1
var arrayCircle = [];

function createCircle(x,y,radius) {
    var objectCircle = {
        x,
        y,
        radius
    }; 
    arrayCircle.push(objectCircle);
}
var random = Math.floor(Math.random() * 20);
createCircle(random,random,random);
createCircle(random *5,random*5,random*5);
createCircle(random*25,random*25,random*25);
createCircle(random*50,random*50,random*50);
createCircle(random*75,random*75,random*75); 

function setup() {
    createCanvas(640,480);
    background(0);

    
}
function draw() {
     for (let i = 0;i < arrayCircle.length;i++) {
     ellipse(arrayCircle[i].x,arrayCircle[i].y,arrayCircle[i].radius,arrayCircle[i].radius);
    }
} */

// esercizio 2
/* function functionFactory(x,y,radius) {
    function draw(){
        ellipse(x,y,radius,radius);
    }
    return draw;
}

const createSmallCircle = functionFactory(100,100,10,10);
const createMediumCircle = functionFactory(200,200,20,20);
const createBigCircle = functionFactory(300,300,30,30);

function setup() {
    createCanvas(640,480);
    background(0);
    
    createSmallCircle();
    createMediumCircle();
    createBigCircle();
    
}
function draw() {
    
} */

// esercizio 3

function functionFactory(radius) {
    function draw(x, y){
        ellipse(x,y,radius,radius);
    }
    return draw;
}

const createSmallCircle = functionFactory(10);

function setup() {
    createCanvas(640,480);
    background(0);
    
    createSmallCircle(200,200);
    
    
}
function draw() {
    
}

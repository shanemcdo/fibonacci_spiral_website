let spiral;

function setup(){
    createCanvas(window.innerWidth - 5, window.innerHeight - 5);
    noFill();
    stroke(255);
    frameRate(32);
    spiral = new FibonacciSpiral();
}

function windowResized(){
    resizeCanvas(window.innerWidth - 5, window.innerHeight - 5);
    translate(width / 2, height / 2);
}

function draw(){
    translate(width / 2, height / 2);
    background(10);
    spiral.draw();
}

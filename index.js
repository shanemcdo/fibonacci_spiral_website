function setup(){
    createCanvas(window.innerWidth - 5, window.innerHeight - 5);
    frameRate(15);
}

function windowResized(){
    resizeCanvas(window.innerWidth - 5, window.innerHeight - 5);
    translate(width / 2, height / 2);
}

function draw(){
    translate(width / 2, height / 2);
    noFill();
    stroke(255);
    draw_bezier(new Coord(0, 0), new Coord(200, 0), new Coord(200, 200));
    stroke('red');
    arc(0, 200, 400, 400, -HALF_PI, 0);
}

function draw_bezier(p0, p1, p2){
    let p = new Coord(0, 0);
    let prev = new Coord(p0.x, p0.y);
    for(let i = 0; i < 1; i += 0.001){
        p.x = (1 - i) * ((1 - i) * p0.x + i * p1.x) + i * ((1 - i) * p1.x + i * p2.x);
        p.y = (1 - i) * ((1 - i) * p0.y + i * p1.y) + i * ((1 - i) * p1.y + i * p2.y);
        line(p.x, p.y, prev.x, prev.y);
        prev = p;
    }
}

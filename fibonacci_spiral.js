class FibonacciSpiral{
    constructor(){
        this.minimum_length = 0.5;
    }
    draw(){
        this.minimum_length *= 1.05;
        if(this.minimum_length > 3.4){
            console.log('reset');
            this.minimum_length = 0.5;
        }
        let previous_previous_length = 0;
        let previous_length = 0;
        let length = this.minimum_length;
        let position = new Coord(0, 0);
        let out_of_bounds = [false, false, false, false];
        let temp;
        for(let counter = 0; counter < 100; counter++){
            square(position.x, position.y, length);
            previous_previous_length = previous_length;
            previous_length = length;
            length += previous_previous_length;
            switch(counter %  4){
                case 0: // move down
                    arc(
                        position.x,
                        position.y + previous_length,
                        previous_length * 2,
                        previous_length * 2,
                        -HALF_PI,
                        0
                    );
                    position.y += previous_length;
                    position.x -= previous_previous_length
                    break;
                case 1: // move left
                    arc(
                        position.x,
                        position.y,
                        previous_length * 2,
                        previous_length * 2,
                        0,
                        HALF_PI
                    );
                    position.x -= length;
                    position.y -= previous_previous_length;
                    break;
                case 2: // move up
                    arc(
                        position.x + previous_length,
                        position.y,
                        previous_length * 2,
                        previous_length * 2,
                        HALF_PI,
                        PI
                    );
                    position.y -= length;
                    break;
                case 3: // move right
                    arc(
                        position.x + previous_length,
                        position.y + previous_length,
                        previous_length * 2,
                        previous_length * 2,
                        PI,
                        -HALF_PI
                    );
                    position.x += previous_length;
                    break;
            }
            if(position.x < -width / 2 || position.x > width / 2 || position.y < -height / 2 || position.y > height / 2)
                out_of_bounds[counter % 4] = true;
            if(!(out_of_bounds.indexOf(false) >= 0))
                break;
        }
    }
}

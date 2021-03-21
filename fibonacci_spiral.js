class FibonacciSpiral{
    constructor(){
        this.minimum_length = 10;
    }
    draw(){
        let previous_previous_length = 0;
        let previous_length = 0;
        let length = this.minimum_length;
        let position = new Coord(0, 0);
        let temp;
        for(let counter = 0; counter < 43; counter++){
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
        }
    }
}

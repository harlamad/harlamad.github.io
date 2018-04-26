// create a standard fly object so that i dont have to type 10 times

function Fly() {
    //sets a temporary sprite object
    tFly = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/fly.png", 20, 20);
    //sets the speed of the sprite object
    tFly.setSpeed(10);
    //create a function to simulate a fly's flight pattern.
    tFly.wriggle = function() {
        //random fly angle--improve this later
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir);
    };

    tFly.reset = function() {

        //SET NEW RANDOM POSITION 
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);

    };

    tFly.reset();
    return tFly;
}

function Frog() {
    tfrog = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/frog.png", 50, 50);
    tfrog.maxSpeed = 10;
    tfrog.minSpeed = -3;
    tfrog.setSpeed(0);
    tfrog.setAngle(0);

    tfrog.checkKeys = function() {
        if (keysDown[K_LEFT]) {
            
            this.changeAngleBy(-5);
        }

        if (keysDown[K_RIGHT]) {
            
            this.changeAngleBy(5);
        }

        if (keysDown[K_UP]) {

            this.changeSpeedBy(1);
        }

        if (keysDown[K_DOWN]) {
            this.changeSpeedBy(-1);
            if (this.speed > this.minSpeed) {
                this.setSpeed(this.minSpeed);
            }
        }

    }
    return tfrog;
}
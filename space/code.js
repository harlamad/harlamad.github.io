var ship;
var game;
var starfield;
var timer;
var missile;
var missiles = [];

function Missile(){
 
 tMissile = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/missile.png', 30, 20);
 
 tMissile.hide();
 
 tMissile.fire = function(){
     
     missiles.push(this);
     this.show();
     this.setSpeed(15);
     this.setPosition(ship.x, ship.y);
     this.setAngle(ship.getImgAngle());
     this.setBoundAction(DIE);
     
 };
    
    return tMissile;
    
}   

function Ship() {

    tShip = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/ship.png', 25, 25);

    tShip.checkKeys = function() {

        if(keysDown[K_LEFT]) {

            this.changeImgAngleBy(-5);

        }

        if(keysDown[K_RIGHT]) {

            this.changeImgAngleBy(5);

        }

        if(keysDown[K_UP]) {

            this.addVector(this.getImgAngle(), .5);

        }
        
        if(keysDown[K_SPACE]){
            
            if(timer.getElapsedTime() >= 0.5){
                
            missile = new Missile();
            missile.fire();
            timer.reset();
                
            }
            
        }
        
       this.addVector(this.getImgAngle(), (this.speed /20 ));
        
    };
    
    tShip.checkDrag = function(){
        
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
        
    };
    

    return tShip;

}

function init() {

    game = new Scene();
    starfield = new Sprite(game, 'https://i.pinimg.com/originals/2e/f6/f7/2ef6f797d38c9f8e2afef17753304a60.jpg', 2000, 2000);
    starfield.setSpeed(0);
    timer = new Timer();
    ship = new Ship();

    game.start();


}

function update() {

    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update(); 
    
    //FOR EACH LOOP WILL ITERATE THROUGH EACH OBJECT IN AN ARRAY
    
    //right thing
    missiles.forEach(function(element){
        
        element.update();
        
    })
    
    //Bad thing
    //missiles[0].update();
    
    
    
    

}
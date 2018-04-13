//starts the *HTML CANVAS* and adds the main loop.
var scene;
var ball;

function init(){
    
    //creates a scene object, which has its own properties and actions
    scene = new Scene();
    scene.setSize(400, 400); 
    //create a sprite object to represent our ball
    ball = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_5/redBall.png", 50, 50);
    ball.setMoveAngle(180);
    ball.setSpeed(3);
    ball.setBoundAction(BOUNCE);
    
    scene.start();
    
}

function update(){
    
    scene.clear();
    ball.update();
    
}
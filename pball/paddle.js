var scene;
var paddle;
var paddle2;
var CHANGE = 5;
var output;

function Paddle(){
    
  tPaddle = new Sprite(scene, "Paddle.png", 100, 100);
  tPaddle.setAngle(180);
  tPaddle.setSpeed(0);
  
  tPaddle.checkKeys = function(){
      
      if(keysDown[K_UP]){
        
        this.changeYby(-5);
        
        if(this.y - this.width/2 < 0){
        
            this.setY(this.width/2);
        }
        
    }
    
    if(keysDown[K_DOWN]){
        
        this.changeYby(CHANGE);
        
        if(this.y + this.width/2 > scene.height){
        
        this.setY(scene.height - this.width/2);
        
        }
        
    }
      
  };
  
  return tPaddle;
    
}

function checkCollisions(){
   /*BOUNDING BOX COLLISION 
    if(paddle.collidesWith(ball)){
        
        output.innerHTML = "COLLISION";
            ball.dx *= -1;
            ball.dy *= -1;
            
    }
    
    else{
        
    output.innerHTML = "NO COLLISION";
    //character.followMouse();
        
    }*/
    
    //Distance Collision
    
    /*dist = box.distanceTo(character);
    output.innerHTL = dist;
    if(dist - character.width/2 - box.width/2 < 50){
    
        output.innerHTML = "COLLISION";
        character.dx *= -1;
        character.dy *= -1;
    
    }else{
    
        output.innerHTML = dist;
    
    }*/
 
}

function init(){
    
    scene = new Scene();
    scene.setSize(700, 500);
    paddle= new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(5);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(5, scene.height/2);
    paddle2.setPosition(scene.width - paddle2.height, scene.height/2);
    
    ball = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_5/redBall.png", 50, 50);
    ball.setMoveAngle(30);
    ball.setSpeed(3);
    ball.setBoundAction(BOUNCE);
    
    output = document.getElementById("output");
    
    scene.start();
    
}

function update(){
    
    scene.clear();
    checkCollisions();
    
    paddle.checkKeys();
    
    paddle.update();
    paddle2.update();
    ball.update();
}
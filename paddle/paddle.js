var scene;
var paddle;
var paddle2;
var moveSound;
var EPICMUSIC;
var CHANGE = 5;

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
        
        moveSound.play();
        
    }
    
    if(keysDown[K_DOWN]){
        
        this.changeYby(CHANGE);
        
        if(this.y + this.width/2 > scene.height){
        
        this.setY(scene.height - this.width/2);
        
        }
        
        moveSOund.play();
        
    }
      
  };
  
  return tPaddle;
    
}

function init(){
    
    scene = new Scene();
    scene.setSize(700, 500);
    paddle= new Paddle();
    paddle2 = new Paddle();
    moveSound = new Sound("https://jelaw21.github.io/Resources/pop.wav");
    EPICMUSIC = new Sound("https://jelaw21.github.io/Resources/music-background.mp3")
    paddle2.setSpeed(5);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(5, scene.height/2);
    paddle2.setPosition(scene.width - paddle2.height, scene.height/2);
    
    scene.start();
    EPICMUSIC.start();
    
}

function update(){
    
    scene.clear();
    
    paddle.checkKeys();
    
    paddle.update();
    paddle2.update();
}

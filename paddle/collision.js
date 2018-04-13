var game;
var box;
var character;
var output;


function checkCollisions(){
   /*BOUNDING BOX COLLISION 
    if(box.collidesWith(character)){
        
        output.innerHTML = "COLLISION";
            character.dx *= -1;
            character.dy *= -1;
            
    }
    
    else{
        
    output.innerHTML = "NO COLLISION";
    //character.followMouse();
        
    }*/
    
    //Distance Collision
    dist = box.distanceTo(character);
    output.innerHTL = dist;
    if(dist - character.width/2 - box.width/2 < 50){
    
        output.innerHTML = "COLLISION";
        character.dx *= -1;
        character.dy *= -1;
    
    }else{
    
        output.innerHTML = dist;
    
    }
 
}


function init(){
    
    game = new Scene();
    game.hideCursor();
    
    box = new Sprite(game, "http://aharrisbooks.net/h5g/h5g_6/simpleBox.png", 100, 100);
    box.setSpeed(0);
    box.setPosition(game.width/2, game.height/2);
    
    character = new Sprite(game, "http://aharrisbooks.net/h5g/h5g_1/GooGooHappy.png", 50, 50);
    character.setSpeed(5);
    character.setMoveAngle(30);
    character.setBoundAction(BOUNCE);
    
    /*character.followMouse = function(){
        
    this.setX(document.mouseX);
    this.setY(document.mouseY);
        
    };*/
    
    output = document.getElementById("output");
    
    game.start();
    
}

function update(){
    
    game.clear();
    checkCollisions();
    character.update();
    box.update();
    
}
    
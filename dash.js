var game;
var car;
var dash;
var taco;
var tacos = [];
var MAXDASH = 5;
var dashes;
var MAXTIME = 20;
var timer;
var time;
var gui;
var score = 0;



function checkCollisions(indexCrash){
    
    if (tTacos.collidesWith(dash[indexCrash])) {
        dash[indexCrash].reset();
        score += 10;
    }
}

function checkTime() {

    time = timer.getElapsedTime();
    if (time > MAXTIME) {

        game.stop();

    }

}
function updateGUI() {

    gui.innerHTML = "Score: " + score + " Time " + time;

}
function restart() {

    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    game.start();

}

function Tacos(){
 
 tTacos = new Sprite(game, 'http://pixelartmaker.com/art/11652c75725c046.png', 60, 50);
 
 tTacos.hide();
 
 tTacos.fire = function(){
     
     tacos.push(this);
     this.show();
     this.setSpeed(12.5);
     this.setPosition(car.x, car.y);
     this.setAngle(car.getImgAngle());
     this.setBoundAction(DIE);
     
 };
    
    return tTacos;
    
} 

function Car(){
    
    tCar = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/car.png', 50, 50);
    
    tCar.checkKeys = function(){
        
        if(keysDown[K_LEFT]){
            
            this.changeImgAngleBy(-5);
            
        }
        
        if(keysDown[K_RIGHT]){
            
            this.changeImgAngleBy(5);
            
        }
        
        if(keysDown[K_UP]){
            
            this.addVector(this.imgAngle, 2);
            
        }
        
        if(keysDown[K_SPACE]){
            
            if(timer.getElapsedTime() >= .9){
                
            taco = new Tacos();
            taco.fire();
            
                
            }
        }
        
    }
    
    return tCar;
    
}


function init(){
    
    game = new Scene();
    
    //0-F; A-10, B-11; C-12; ... F-15
    game.setBG('#87cefa');
    game.setSize(400, 400);
    
    timer = new Timer();
    gui = document.getElementById('gui');
    
    car = new Car();
    car.setSpeed(0);
    
    dash = new Car();
    dash.setSpeed(10);
    dash.setAngle(15);
    
    game.start();
    
}

function update(){
    
    game.clear();  
  
    checkTime();
    updateGUI();
    
    dash.update();
    
    car.checkKeys();
    car.update();
    
    tacos.forEach(function(element){
        
        element.update();
        
    })
    
    
    
}
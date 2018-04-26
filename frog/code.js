var scene;
var fly;
var frog;
var ribbit;
var flies;
var NUMFLIES = 3;
var MAXTIME = 10;
var timer;
var time;
var gui;
var score = 0;

function checkCollisions(indexFly) {
    if (frog.collidesWith(flies[indexFly])) {
        ribbit.play();
        flies[indexFly].reset();
        score += 10;
    }
}

function setupFlies() {

    flies = [];
    for (var i = 0; i < NUMFLIES; i++) {

        flies.push(new Fly());

    }

}
function checkTime() {

    time = timer.getElapsedTime();
    if (time > MAXTIME) {

        scene.stop();

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
    scene.start();

}

//sets the scene,calls the update function,creates the sprites

function init() {

    scene = new Scene();

    timer = new Timer();
    gui = document.getElementById('gui');
    scene.setSize(300, 400);
    scene.setBG("green");
    setupFlies();
    frog = new Frog();
    leaves = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/leaves.png", 400, 450);
    leaves.setSpeed(0);
    ribbit = new Sound("https://jlaw21.githhub.io/Resources/ribbit.mp3");

    scene.start();
}

//makes things move,draws things to the canvas,

function update() {

    scene.clear();
    checkTime();
    updateGUI();

    //move things
    leaves.update();

    for (var i = 0; i < flies.length; i++) {

        flies[i].wriggle();
        checkCollisions(i);
        flies[i].update();

    }

    frog.checkKeys();

    //redraw things  

    frog.update();


}
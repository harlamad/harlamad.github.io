$(function(){
    
    question1();
    
});

var question1= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q1").html("Do you like to play video games?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
    $(".buttons").append("<button class='btn btn-primary q1-no'> NO </button>");
    
    //MAKE IT WORK
    $(".q1-yes").click(function(){
        
       //Update Sidebar 
       $(".q1-choice").html("YES").show();
       //Run question 2
        question2();
        
    });
    
    //MAKE IT WORK
    $(".q1-no").click(function(){
        
       //Update Sidebar 
       $(".q1-choice").html("NO").show();
       //Run question 2
        $(".narrative").html("This app is not for yo!!!!")
        
    });
};

var question2= function(){
    
    //Update the Graphics
    $("div.narrative, span.q2").html("What type of game do you like to play?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-rpg'>RPG</button>");
    $(".buttons").append("<button class='btn btn-primary q2-fps'>FPS</button");
    $(".buttons").append("<button class='btn btn-primary q2-sports'>Sports</button");
    $(".buttons").append("<button class='btn btn-primary q2-adventure'>Adventure</button");
    $(".buttons").append("<button class='btn btn-primary q2-mmo'>MMO</button");
    
    //Make it Work
    $(".q2-rpg").click(function(){
        
        $(".q2-choice").html("RPG").show();
        question3("RPG");
        
    });
    
    $(".q2-fps").click(function(){
        
        $(".q2-choice").html("FPS").show();
        question3("FPS");
        
    });
    
    $(".q2-sports").click(function(){
        
        $(".q2-choice").html("Sports").show();
        question3("Sports");
    });
    
    $(".q2-adventure").click(function(){
        
        $(".q2-choice").html("Adventure").show();
        question3("Adventure");
        
    });
    
    $(".q2-mmo").click(function(){
        
        $(".q2-choice").html("MMO").show();
        question3("MMO");
        
    });
    
};

var question3= function(q2_choice){
    
    $("div.narrative, span.q3").html("What type of " + q2_choice + " do you like?");
    $(".q3").show();
    if(q2_choice === "RPG"){
        
        q3_buttons("Science Fantasy", "Science Fiction");
        
    }
    else if(q2_choice === "FPS"){
        
        q3_buttons("Realistic", "Futuristic");
        
    }
    
    else if(q2_choice === "Sports"){
        
        q3_buttons("Basketball", "Football");
        
    }
    
    else if(q2_choice === "Adventure"){
        
        q3_buttons("Simulation", "Hack N Slash");
        
    }
    
    else
        q3_buttons("Arena", "RPG's");
    
};


var q3_buttons = function(b1Text, b2Text){
    
    $(".buttons").html("<button class ='btn btn-primary q3-button1'>" + b1Text + " </button>");
    $(".buttons").append("<button class ='btn btn-primary q3-button2'>" + b2Text + " </button>");
    
    
    $(".q3-button1").click(function(){
        
        if(b1Text === "Science Fantasy"){
        
        displayChoice("Science Fantasy", "Final Fantasy");
        
    }
    else if(b1Text === "Realistic"){
        
        displayChoice("Realistic", "Medal of Honor");
        
    }
    
    else if(b1Text === "Basketball"){
        
        displayChoice("Basketball", "2k18");
        
    }
    
    else if(b1Text === "Simulations"){
        
        displayChoice("Simulation", "Sims 4");
        
    }
    
    else
        displayChoice("Arena", "League of Lengends");
       
        
    });
    
    $(".q3-button2").click(function(){
    
    if(b2Text === "Science Fiction"){
        
        displayChoice("Science Fiction", "Star Wars");
        
    }
    
    else if(b2Text === "Futuristic"){
        
        displayChoice("Futuristic", "Destiny");
        
    }
    
    else if(b2Text === "Football"){
        
        displayChoice("Football", "Madden 18");
        
    }
    
    else if(b2Text === "Hack N Slash"){
        
        displayChoice("Hack N Slash", "Dynasty Warriors");
        
    }
    
    else
        displayChoice("RPG's", "Wizard 101");
        
 });
 
};


var displayChoice = function(finalAnswer, gameOption){
    
  $(".q3-choice").html(finalAnswer).show();
  $(".narrative").html("<span class='answer'>" + gameOption + "</span>");
  $(".buttons").hide();
    
};





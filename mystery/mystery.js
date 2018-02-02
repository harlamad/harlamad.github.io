$(function(){
    
    question1();
    
});

var question1= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q1").html("You host a party to celebrate your engagement with your new fiance. During the party you look around for your fiance but can't find them. You soon hear a scream and glass breaking upstairs. Everyone goes to investigate. You see your fiance laying dead on your bedroom floor next to a pile of broken glass and a puddle of wine. Do you pick up the broken glass?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
    $(".buttons").append("<button class='btn btn-primary q1-no'> NO </button>");
    
    //MAKE IT WORK
    $(".q1-yes").click(function(){
        
       //Update Sidebar 
       $(".q1-choice").html("YES").show();
       //Run question 2
        $(".narrative").html("You end up cutting your hand and dying because the liquid inside the bottle is poisoned. The murderer gets away and kills the remaining people by setting the mansion on fire. You Died!!!! *You got the Bad Ending*");
        
    });
    
    //MAKE IT WORK
    $(".q1-no").click(function(){
        
       //Update Sidebar 
       $(".q1-choice").html("NO").show();
       //Run question 2
        question2();
        
    });
};

var question2= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q2").html("The detective analyzes that the liquid in the bottle had been poisoned. He covers up your fiances body with a bed sheet and advises that everyone remain calm. And asks everyone who saw your fiance last which turned out to be the butler. He says that your fiance had requested the wine but the cook says he has never seen that bottle of wine before in the wine cabinet. But you remebered how much your ex still loves you. Who do you accuse first?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-cook'> <img src='cook.png' style='width:250px;height:250px;'> </button>");
    $(".buttons").append("<button class='btn btn-primary q2-butler'> <img src='hellb.png' style='width:250px;height:250px;'> </button>");
    
    //MAKE IT WORK
    $(".q2-cook").click(function(){
        
       //Update Sidebar 
       $(".q2-choice").html("Cook").show();
       //Run question 3
        $(".narrative").html("You call the police and they take him away, you find out later that the Cook killed your spouse-to-be and said he would finish off his revenge one way or another even in jail. You Survived!!!! *You got the Normal Ending*")
        
    });
    
    //MAKE IT WORK
    $(".q2-butler").click(function(){
        
       //Update Sidebar 
       $(".q2-choice").html("Butler").show();
       //Run question 3
        question3();
        
    });
};

var question3= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q3").html("You end up locking the Butler in a private room so that he can be investagated, but when you return you see the butler laying dead in a pool of his own blood. It had seemed that someone had slit his throat. You notice a piece of red cloth in his hand, maybe when he went to fight back and grabbed on to it. You grab the cloth and find your Ex and the Detective since they were the only one's to be wearing red. Who do you go to first?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-primary q3-ex'><img src='red.png' style='width:100px;height:300px;'></button>");
    $(".buttons").append("<button class='btn btn-primary q3-dec'> <img src='grrr.png' style='width:200px;height:300px;'></button>");
    
    //MAKE IT WORK
    $(".q3-ex").click(function(){
        
       //Update Sidebar 
       $(".q3-ex").html("Ex-Girlfriend").show();
       //Run question 4
        question4();
        
    });
    
    //MAKE IT WORK
    $(".q3-dec").click(function(){
        
       //Update Sidebar 
       $(".q3-dec").html("Detective").show();
       //Run question 4
        $(".narrative").html("You go to the detective and match the patch to the hole in his coat. He thinks that you are accusing him of murder and wonders why you went to see the butler after he died. You end up going to jail and everyone is sent home. On the news, they report that your mansion was burned to the ground with your son inside. You kill yourself out of depression and grief. You Died!!!! *You got the Bad Ending*")
    });
};

var question4= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q4").html("You show the detective a piece of red fabric and point to your Ex. He understands what you are trying to get at and goes to investagate your Ex. He comes back and tells you that she ripped her dress out side on the carriage. You ask if it would be okay to go and investagate the carriage with the cook. When you go outside you notice something shiny in the bushes. Do you... ");
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-primary q4-bush'> Go to the Bush </button>");
    $(".buttons").append("<button class='btn btn-primary q4-carriage'> Go to the Carriage </button>");
    
    //MAKE IT WORK
    $(".q4-bush").click(function(){
        
       //Update Sidebar 
       $(".q4-choice").html("Go to the Bush").show();
       //Run question 5
        $(".narrative").html(" You decided to go to the bush and see what was over there. You see a snake trapped in a glass cage. You go to set it free but it ends up biting you on the hand and you feel a little dizzy and collapse to the floor with the cook hovering over you with a smirk. You Died!!!! You got the *Bad Ending*")
        
    });
    
    //MAKE IT WORK
    $(".q4-carriage").click(function(){
        
       //Update Sidebar 
       $(".q4-choice").html("Go to the Carriage").show();
       //Run question 5
        question5();
        
    });
};

var question5= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q5").html("You approach the carriage with caution. You notice a piece of red fabric caught in the door. You open up the carriage and grab the cloth. You then look up and see two empty bottles of the same bottle of wine that your fiance drank before she died. Soon you hear screams and notice that the lights in the mansion go out,you hear a gunshot go off near you. The screams at you to get down. Do you do as your told. ");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-primary q5-listen'> You listen and get down. </button>");
    $(".buttons").append("<button class='btn btn-primary q5-not'> You do what you want. </button>");
    
    //MAKE IT WORK
    $(".q5-not").click(function(){
        
       //Update Sidebar 
       $(".q5-choice").html("Do what you want").show();
       //Run question 6
        $(".narrative").html("You end up not listening to your Cook and decide to stay standing by the carriage. You get shot in the head. Nobody survives the shooting, not even the murderer. You Died!!! You got the *Normal Ending*");
        
    });
    
    //MAKE IT WORK
    $(".q5-listen").click(function(){
        
       //Update Sidebar 
       $(".q5-choice").html("Get Down").show();
       //Run question 6
        question6();
        
    });
};

var question6= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q6").html(" You get down and another shot goes off. You hear tghe Cook let out a grunt and hit the floor. The lights turn back on and you look over to see that the cook was shot in the arm. You put presher on the wound and help him back into the mansion and see everyone crowding around someone. You get closer and see that you Ex was shot in the head. You look over and notice that the Duke was holding a hand gun. Do you say something?");
    $(".q6").show();
    $(".buttons").html("<button class='btn btn-primary q6-no'>No</button>");
    $(".buttons").append("<button class='btn btn-primary q6-yes'> Yes </button>");
    
    //MAKE IT WORK
    $(".q6-no").click(function(){
        
       //Update Sidebar 
       $(".q6-choice").html("No").show();
       //Run question 7
        $(".narrative").html("You decide not to say anything. You turn back around to take care of the Cook and once you turn your back the Duke holds the gun up to your head and shoots you as well as everyone else. You Died!!! You got the *Bad Ending*");
        
    });
    
    //MAKE IT WORK
    $(".q6-yes").click(function(){
        
       //Update Sidebar 
       $(".q6-choice").html("Yes").show();
       //Run question 7
        question7();
        
    });
};

var question7= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q7").html("You speak up and everyone turns to see that the Duke was still holding the gun. The Detective tells him to put the gun down slowly and he does as told. You hear fast footsteps near the stairs and see your two sons holding swords. They yell down saying sorry about the lights, it was only an accident. You look back to see the Duke with the gun in his hand pointing it at your sons, the Duke asks who do you think killed your Ex.");
    $(".q7").show();
    $(".buttons").html("<button class='btn btn-primary q7-duke'><img src='duke.png' style='width:250px;height:250px;'>  </button>");
    $(".buttons").append("<button class='btn btn-primary q7-sons'><img src='ac.jpg' style='width:250px;height:250px;'>  </button>");
    
    //MAKE IT WORK
    $(".q7-sons").click(function(){
        
       //Update Sidebar 
       $(".q7-choice").html("Sons").show();
       //Run question 8
        $(".narrative").html("You blame your sons since you knew one was skilled with a gun better then a sword. The Duke hears your answer and ends up pulling the trigger on your sons and killing them both. You pull out your own gun and shoot the Duke for murdering your only sons. You are then arrested for murdering the Duke. You Failed!!! You got the *Bad Ending* ");
        
    });
    
    //MAKE IT WORK
    $(".q7-duke").click(function(){
        
       //Update Sidebar 
       $(".q7-choice").html("Duke").show();
       //Run question 8
        question8();
        
    });
};

var question8= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q8").html("You blame the Duke and so he looks at you and agree's. He puts down his hand so that the gun is now resting in his hand on the side. The detective has been attending to the Cook, trying to patch his arm all up. The Duke looks at you and says that he never ment to pull the trigger, it was all an accident, he didn't mean to kill the woman he loved. He held the gun up to his head and before you could stop him he pulled the trigger. There is then a knock at the door, do you answer...?");
    $(".q8").show();
    $(".buttons").html("<button class='btn btn-primary q8-answer'> Answer the door. </button>");
    $(".buttons").append("<button class='btn btn-primary q8-ignore'>Ignore it.</button>");
    
    //MAKE IT WORK
    $(".q8-answer").click(function(){
        
       //Update Sidebar 
       $(".q8-choice").html("Answer the door.").show();
       //Run question 9
        $(".narrative").html("You go to answer the door. When you open the door, a cop is standing there. He sees the blood on your outfit and asks if your okay. He pushes himself through the door to get inside and sees the Duke dead, and your Ex. H ethen looks over at the cook who was shot and looks back at you. He arrests you for investigation. He thinks you killed them and your fiance and butler. You are given a life time in prison. You commited suicide by hanging your self. You Died!!! You got the *Bad Ending*");
        
    });
    
    //MAKE IT WORK
    $(".q8-ignore").click(function(){
        
       //Update Sidebar 
       $(".q8-choice").html("Ignored the knocking.").show();
       //Run question 9
        question9();
        
    });
};

var question9= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q9").html(" You decided to ignore the knocking and after a few minutes it stops. You gather the remaining people that are left which is the Cook, Detective, you and your sons. You go over the possibilities to find out who the murderer is. Both the butler and the cook were accused of murdering your fiance, but the butler ended up dying. Then your Ex and the detective are accused of murdering the butler, but later the Ex ends up dying. Next your sons and the duke are accused of murdering your Ex but the Duke blames himself and commits suicide. All three (the cook, detective, and your sons) were accused of murdering someone. Who do you think should decide on who the murderer is...  ");
    $(".q9").show();
    $(".buttons").html("<button class='btn btn-primary q9-You'> <img src='vincent.png' style='width:250px;height:250px;'> </button>");
    $(".buttons").append("<button class='btn btn-primary q9-dec'> <img src='grrr.png' style='width:200px;height:300px;'> </button>");
    
    //MAKE IT WORK
    $(".q9-You").click(function(){
        
       //Update Sidebar 
       $(".q9-choice").html("You decides").show();
       //Run question 10
        question10();
        
    });
    
    //MAKE IT WORK
    $(".q9-dec").click(function(){
        
       //Update Sidebar 
       $(".q9-choice").html("Detective decide").show();
       //Run question 10
        $(".narrative").html(" Everyone decides on that the detective should be the one to decide on whos the murderer. After think about it he says that you murdered everyone, that your the one to blame for this. Noting that you were with everyone who died. You are then arrested and sent to jail for life. The next day on the news you hear about how your mansion was burned to the ground with everything in it including your family. You Failed!!!!! You got a *Bad Ending*");
        
    });
};

var question10= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q10").html(" You are the one to decide who the true murderer is. The cook says it was the detective, your kids say the cook, while the detective says it was you. Who do you side with...?");
    $(".q10").show();
    $(".buttons").html("<button class='btn btn-primary q10-cook'> <img src='cook.png' style='width:200px;height:300px;'> </button>");
    $(".buttons").append("<button class='btn btn-primary q10-dec'> <img src='grrr.png' style='width:200px;height:300px;'> </button>");
    $(".buttons").append("<button class='btn btn-primary q10-sons'><img src='ac.jpg' style='width:200px;height:300px;'> </button>");
    
    //MAKE IT WORK
    $(".q10-dec").click(function(){
        
       //Update Sidebar 
       $(".q10-choice").html("You did it.").show();
       //Run question bad
        $(".narrative").html(" You end up agreeing with the detective. You blame yourself for the deaths of everyone around you. You are arrested and sentenced to a death penalty of being hanged. You have failed, you could not find out who the real murderer was. This was the bad ending.");
        
    });
    
    //MAKE IT WORK
    $(".q10-sons").click(function(){
        
       //Update Sidebar 
       $(".q10-choice").html("The cook did it.").show();
       //Run question bad
        $(".narrative").html("You end up agreeing with your sons. You blame the cook for the deaths of everyone around you. The cook is arrested and sentenced to a death penalty of being hanged. You have won, you found out who the real murderer was. This was the normal ending. ");
        
    });
    
    //MAKE IT WORK
    $(".q10-cook").click(function(){
        
       //Update Sidebar 
       $(".q10-choice").html("The detective did it.").show();
       //Run question 11
        question11();
    
    });
};

var question11= function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.qgood").html(" You end up believing that the detective did it. The detective denies your choice and pulls out a gun. He points it at you and pulls the trigger. One of your sons get in the way and gets hit by the bullet. The other son takes his sword out and stabs the detective in the stomach. Everyone thought that the detective died but you see him hold up the gun at your other son and pull the trigger before he dies of blood lost. Your sons were both shot in the head. It was only you and the cook now. You hear the cook say, what a pity that I couldn't kill them myself, but it only made my job easier. He pulls out a hand watch and says, its amost time, I should get out of here. Before he leaves you grab his hand as the mansion is engulfed in flames. You pass out from the heat and wake up in a white room. Standing in front of you is a man called the Reaper. You Listen to the Reaper.");
    $(".q11").show();
    $(".buttons").html("<button class='btn btn-primary q11-taker'> <img src='taker.jpg' style='width:250px;height:250px;'> </button>");

    
    //MAKE IT WORK
    $(".q11-taker").click(function(){
        
       //Update Sidebar 
       $(".q11-choice").html("Listen to the undertaker.").show();
       //Run question 11
        $(".narrative").html("The Reaper tells you that the cook was the murderer, who was also your first born son. He wanted revenge for forcing his mother out after finding out that she was pregnant, to afraid of knowing the gender of the baby. You accept that he was right for wanting revenge. You ask the Reaper if he can allow you to bring your oldest son to heaven with you, so that he could be with his mother again. You have found out who the murderer was, and have accepted him as a man who only wanted justice than seeing him as a killer. You got the *GOOD ENDING* THE END ");
        
    });
};

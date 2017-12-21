var result;
var answer;
var total=0;
var wins=0;
var losses=0;
var num1;
var num2;
    
    $(function(){
        
        newProblem();
    
    $(".submit").click(function(){
        
        checkMath();
    });

    $(".again").click(function(){
 
    newProblem();
    
    });

    $(".start_Over").click(function(){
 
    startOver();
    
    });
});

var updateStats = function (a, b, c){
    
    $(".total_played").html(a);
    $(".total_lost").html(b);
    $(".total_won").html(c);
    
    $(".stats").show();
    
};

var checkMath = function(){
    
    answer = parseInt($("#user_answer").val());
        total++;
        
        if(result == answer){
            
            $(".result_text").html("YOU ARE CORRECT!!!");
            wins++;
        }
        
        else{
            
            $(".result_text").html("Very close, keep trying!");
            losses++;
            
            }
            
            $(".result").show();
            updateStats(total, losses, wins);
    
};

var newProblem = function(){
    
    num1 =parseInt(Math.random()*20)
    num2 =parseInt(Math.random()*20)

    
    $("#num1").html(num1);
    $("#num2").html(num2);
    
    result = num1 + num2;

$(".result").hide();
$(".stats").hide();

};

var startOver = function(){
    
    total = 0
    wins = 0
    losses = 0
    newProblem();
    
}

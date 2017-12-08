$(function(){
    //SCOPE!!! !!! !!! !!!
    //GLOBAL vs LOCAL VARIABLES
    
    var number1, number2;
    
    $(".add").click(function(){
    
    
      //INPUT
      number1 = parseInt($("#num1").val());
      number2 = parseInt($("#num2").val());
      number3 = parseInt($("#num3").val());
      number4 = parseInt($("#num4").val());
      
      //CALCULATE
      var answer = number1 + number2 + number3 + number4
      
      //OUTPUT
      $(".answer").html(answer);
    
    });
    
});
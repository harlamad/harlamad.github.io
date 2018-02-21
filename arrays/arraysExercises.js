$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
        var shaps = ($(".numElements").val());
        listElements(shaps);
        
    });
    
    $(".q3-function").click(function() {
        var color = ($(".numElements").val());
        arrayFill(color);
        
    });
    
    $(".q4-function").click(function() {
        pairingArrays();
    });
});

var output = function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];

    for(i = 0; i < arr.length; i += 2) 
      $(".q1-output").append(arr[i] + "</br>");
    
};

var listElements = function(n) {

    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    
    for(i = 0; i < n; i++);
    $(".q2-output").append(shapes[i] + "</br>");

};

var fillArray = function() {

 var color = ["Orange", "Yellow", "Green"];

    for(i = 0; i < n; i+=1);
    $(".q3-output").push()( " , " + color[i] + "</br>");

};

var pairingArrays = function() {

    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    var arr = [2, 5, 6, 10, 16, 7, 8];
    
    for(i = 3; i < shapes.length; i+=1);
    for(i = 3; i < arr.length; i+=1); 
      $(".q4-pairingArrays").append("</br>" + "I drew " + arr[3] + " " + shapes[3]);


};
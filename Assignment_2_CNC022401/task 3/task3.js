
// part "a"
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
document.write("a = given condition for variable a is true")
document.write("<br>")

// part "b"
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write("b = output is null because condition is false")
document.write("<br>")

// part "c"
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
document.write("c = condition 2 and 4 is true")
document.write("<br>")

// part "d"
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
document.write("d = null ")
document.write("<br>")

// part "e"
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
document.write("e = the cost equals and the condition is True")
document.write("<br>")

// part "f"
if("car" < "cat"){
alert("car is smaller than cat");
}
document.write("f = car is smaller than cat")
document.write("<br>")
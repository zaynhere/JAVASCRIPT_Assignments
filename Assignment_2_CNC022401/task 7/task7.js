var first_number = prompt("enter the first number")
var second_number = prompt("enter the second number")
var operator = prompt("enter the operator")

if (operator === '+' ){
    document.write("first number is: "+ first_number )
    document.write("<br>")
    document.write("second number is: "+ second_number )
    document.write("<br>")
    document.write("Addition of given numbers is: " +(parseInt(first_number) + parseInt(second_number)))
}
else if (operator === '-'){
    document.write("first number is: "+ first_number )
    document.write("<br>")
    document.write("second number is: "+ second_number )
    document.write("<br>")
    document.write("<br>")
    document.write("subtraction of given numbers is: " +(parseInt(first_number) - parseInt(second_number)))
}
else if (operator === '*' ){
    document.write("first number is: "+ first_number )
    document.write("<br>")
    document.write("second number is: "+ second_number )
    document.write("<br>")
    document.write("<br>")
    document.write("multiplication of given numbers is: " +(parseInt(first_number) * parseInt(second_number)))
}
else if (operator === '/' ){
    document.write("first number is: "+ first_number )
    document.write("<br>")
    document.write("second number is: "+ second_number )
    document.write("<br>")
    document.write("<br>")
    document.write("division of given numbers is: " +(parseInt(first_number) / parseInt(second_number)))
}    
else if (operator === '%' ){
    document.write("first number is: "+ first_number )
    document.write("<br>")
    document.write("second number is: "+ second_number )
    document.write("<br>")
    document.write("<br>")
    document.write("modulus of given numbers is: " +(parseInt(first_number) % parseInt(second_number)))
}
else {
    document.write("Invalid Syntax")
}


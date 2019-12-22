var num = Math.floor((Math.random() * 10) + 1);
var userInput = prompt("Guess any number from 1 to 10") 

if (num == userInput) {
    document.write("Bingo! Correct Answer")
    document.write("<br>")
    document.write(num + " is the correct answer")
    
} 
else if (num === ++userInput|| num === --userInput){
    document.write("Close enough to the correct answer!")
    document.write("<br>")
    document.write(num + " is the correct answer")
}
else{
    document.write("Incorrect! Try Again")
    document.write("<br>")
    document.write(num + " is the correct answer")

}

var A = ["cake" , "apple" , "juice" , "pastries" , "pizza" , "burger"]
var userInput = prompt("what would you like to take to eat?")
var found = false
for(var i=0 ; i < A.length ; i++){
    if(userInput === A[i]){
        console.log( userInput + " " + "is available at index" + i);
        found = true;
        break
    }                                                                              
}
if(!found){
    console.log("we are sorry , " + userInput + " is not available")
}
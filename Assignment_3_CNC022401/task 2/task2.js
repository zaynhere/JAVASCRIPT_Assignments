var students = ["Ali", "Abbas", "Haider"]
var scores = [320 , 230 , 480]
for(var i = 0; i < scores.length; i++){
    document.write("Score of "+students[i]+" is: "+scores[i] + ". ") 
    document.write("Percentage is "+(scores[i] / 500) * 100+"%")
    document.write("<br>")
} 
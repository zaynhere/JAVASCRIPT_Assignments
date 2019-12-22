var obtainedMarks= prompt("Enter the marks obtained in five subjects altogether;")
var totalMarks = prompt("write Total marks below;")
var per = (obtainedMarks / totalMarks) * 100
document.write("Total Marks: "+totalMarks )
document.write("<br>")
document.write("Marks Obtained : "+obtainedMarks)
document.write("<br>")
document.write("Percentage: "+per+"%")
document.write("<br>")
if (per >= 80){
    document.write("Grade: A-one")
    document.write("<br>")
    document.write("remarks: 'Excellent' ")
} 
else if (per >= 70 && per < 80){
    document.write("Grade: A")
    document.write("<br>")
    document.write("remarks: 'Good' ")
}
else if (per >= 60 && per < 70){
    document.write("Grade: B")
    document.write("<br>")
    document.write("remarks: 'need to improve' ")
}
else if (per < 60){
    document.write("Fail")
    document.write("<br>")
    document.write("remarks: 'sorry' ")
}
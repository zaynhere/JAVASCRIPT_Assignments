var signalColor = prompt("enter color of road traffic signal")
if (signalColor == "red") {
    document.write("Must Stop")
}
else if (signalColor == "yellow") {
    document.write("Ready to move")
}    
else if (signalColor == "green") {
    document.write("Move now")
}
else {
    document.write("Invalid input")
}
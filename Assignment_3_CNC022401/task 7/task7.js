// taking user input and showing counting till the given input number

var counting = [];
var a = prompt("Till which number you would like to see counting?") 
for(var i=1 ; i <= a; i++ ){
    counting.push(i)
}
console.log(counting);

var reverseCounting = [];
var b = prompt("from which number you would like to see backward counting?") 
for(var i=b ; i > 0 ; --i){
    reverseCounting.push(i)
}
console.log(reverseCounting);

var even_Counting = [];
var c = prompt("Till which number you would like to see even number?") 
for(var i=0 ; i <= c ; i+=2 ){
    even_Counting.push(i)
}
console.log(even_Counting);

var odd_Counting = [];
var d = prompt("Till which number you would like to see odd number?") 
for(var i=1 ; i <= d ; i+=2 ){
    odd_Counting.push(i)
}
console.log(odd_Counting);

var even_series = [];
var e = prompt("Till which number you would like to see even \"k\" series?") 
for(var i=0 ; i <= e ; i+=2 ){
    even_series.push(i+"k")
}
console.log(even_series)

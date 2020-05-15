var a1 = [1,2,3,4,5,6,7,8,9,10]
var b1 = [10,20,4,40,60,70]

var concat_array = a1.concat(b1)
console.log(concat_array)
var unique_elements = new Set(concat_array)
console.log(unique_elements)

var arr_union = []

for( var union of unique_elements){
    arr_union.push(union)
}
console.log(arr_union)
var colors = []  //empty array
// taking user input adding 1 color
colors.unshift(prompt("What color do you want to add to the beginning of array?")) 
console.log(colors)
// taking user input adding 1 color at the end
colors.push(prompt("what color do you wants to add to the end of the array?"))
console.log(colors)
// adding two more colors at the beginning
colors.unshift(prompt("What other two color do you want to add to the beginning?", "color1"))
colors.unshift(prompt("What other two color do you want to add to the beginning?", "color2"))
console.log(colors)
//removing one color from beginning
colors.shift()
console.log(colors)
// removing one color from the end
colors.pop()
console.log(colors)
// taking user input adding one color at given index
colors[prompt("At which index do you wants to add a color?")]=prompt("which color name?")
console.log(colors)
// removing colors from array by taking index as input from user
a1 = prompt("which color do you want to remove, type index value?")
a2 = prompt("how many colors do you want to remove on from there?" ,"type number")
colors.splice(a1 , a2)
console.log(colors)


alert("Hello Are you going to use faulty claculator 😃 be aware")

let random = Math.random()
console.log(random)
let a = prompt("Enter first Number")
let b = prompt("Enter second Number")
let c = prompt("Enter Operation")

let obj = {
    "+":"-",
    "-":"-",
    "*":"/",
    "/":"**"
}

if (random > 0.2) {
    //correct calculation
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`)
} else {
    c = obj[c]
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`)
}
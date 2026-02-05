function operation(a, b, c) {
    return a + b - c;
}

console.log(operation(20, 34, 23));


console.log("///////////////////")

function summer(a, b) {
    return function (c) {
        console.log(a + b - c);
    }
}


const first = summer(20, 34)
first(23)
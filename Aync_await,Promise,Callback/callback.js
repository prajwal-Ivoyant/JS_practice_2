console.log("0000000000000000")

function opereator(a, b, op) {
    console.log(op(a, b));
}

console.log("0000000000.1111")

const sum = (a, b) => a + b;

const mul = (x, y) => x * y;

opereator(10, 20, sum)


console.log("111111111111")

function CbF(delay) {
    setTimeout(() => {
        console.log("time delay", delay)
    }, delay)

}

CbF(1000)

console.log("2222222222222")


function fetcherFun(cb) {
    fetch("https://dummyjson.com/todos/1")
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(err))
}

function handle(data) {
    console.log("the fetched data :", data)
}

fetcherFun(handle)
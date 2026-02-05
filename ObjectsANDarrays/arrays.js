// Map
console.log("map :")
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 90]

const a = arr1.map(e => e * 2)
console.log(a)
console.log(arr1.map(e => e % 2 === 0))
console.log(arr1.map(e => e % 2))


// filter
console.log("filter :")

const b = arr1.filter(e => e % 2 === 0)
console.log(b)

// find
console.log("find :")

console.log(arr1.find(a => a > 5))
console.log(arr1.find(a => a < 5))

console.log(arr1.findIndex(a => a > 5))
console.log(arr1.findLast(a => a > 5))
console.log(arr1.findLastIndex(a => a > 5))



// includes
console.log("includes :")

const arr2 = ['abd', 'virat', 'msd', 'yuvi']
console.log(arr2.includes('virat'))



// reduce
let sum = arr1.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;


}

console.log(sum)




// push

let arr3 = [1, 2, 3, 'ram', 'arjun'];

arr3.push('krishana')
arr3.push(true)
arr3.push(12)

console.log(arr3)

// pop
console.log("pop :")

arr3.pop()
console.log(arr3)

// join
console.log("join :")


arr2.join(" and ")
console.log(arr2.join(" and "))
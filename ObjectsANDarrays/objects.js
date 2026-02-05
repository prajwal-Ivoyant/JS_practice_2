// key

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person2 = {
    firstName: "John",
    MidName: "Doe",
    shoeColor: "blue"
};

console.log(Object.keys(person))
console.log(Object.keys(person2))


// values


console.log(Object.values(person))
console.log(Object.values(person2))

// entries
console.log(Object.entries(person))
console.log(Object.entries(person2))

// merge - spread
const obj2 = { ...person, ...person2 }
console.log(Object.entries(obj2))

// extract - destructure
const { firstName: name, shoeColor } = { ...obj2 }
console.log(name, shoeColor)


// check - hasOwn
console.log(Object.hasOwn(obj2, 'name'))
console.log(Object.hasOwn(obj2, 'id'))
console.log(Object.hasOwn(obj2, 'eyeColor'))

// clone - assign

const obj3 = {};
Object.assign(obj3, obj2)
console.log(Object.entries(obj3))

// seal - seal 

Object.freeze(obj3)
obj3.MidName = "Prj"
console.log(Object.entries(obj3))
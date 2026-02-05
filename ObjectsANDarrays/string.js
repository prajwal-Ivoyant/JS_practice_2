// split
console.log("split : ")

const str1 = "a,,bc,de,fg,h,iajk,,l,m,,n,op,qa,rs,u,,v,x,y,z"
const a = str1.split(",")
console.log(a)
console.log(str1.split("a"))
console.log(str1.split(",,"))

// includes
console.log("includes : ")

const str2 = "aabbccsdderssfgahdfviaajadakfaaldaaavmavavdvaavavvaanoapadqvedbrfnrdtsyjttstretbruvbwerxgyz"

console.log(str2.includes("aa"))
console.log(str2.includes("avv"))
console.log(str2.includes("acsdcsda"))


// sclice
console.log("sclice : ")
console.log(str2.slice(3, 7))
console.log(str2.slice(13, 37))



// replace
console.log("replace : ")

const str3 = "the str will replace => ram hanuma                       "

console.log(str3.replace("replace => ram hanuma", 'replaced with => ram hanuma lakshmana'))

// trim
console.log("trim : ")

console.log(str3.trim())

// tolowercase

const str4 = "THIS IS A EXAMPLE OF TOLOWERCASE"
const b = str4.toLowerCase()
console.log(b)


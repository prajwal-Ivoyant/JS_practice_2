function outer(str) {
    console.log("outer :", str);
    return function (str2) {
        console.log("inner", str2)
        console.log(str + str2)
    }
}


const fun1 = outer("<<= argument passed to outer function ::: fun1 =>>")

//fun1("::argument passed to the fun1::")
fun1("<><><><><>")
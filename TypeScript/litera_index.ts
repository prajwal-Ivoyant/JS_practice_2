type Status = "success" | "error" | "loading";

let s: Status = "success";
//let s2: Status = "done";   

console.log(s)



//////////////////////////////


type Scores = {
    [key: string]: number;
};

const marks: Scores = {
    math: 95,
    english: 88,
};

console.log(marks.math)


type ClassMem = {
    [index: number]: string;
};

const names: ClassMem = {
    0: "Prajwal",
    1: "Rahul",
};

console.log(names)

//writing reusable code that works with any data type, while still keeping type safety.


interface User {
    id: number;
    name: string;
    age: number;
    password: string;
};


function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("hello"));
console.log(identity<number>(10));



//////////////////////////////


type ApiResponse<T> = {
    status: number;
    data: T;
};

type UserResponse = ApiResponse<User>;


const x: UserResponse = {
    status: 200,
    data: {
        id: 1,
        name: "Prajwal",
        age: 20,
        password: 'asbciwb222'
    },
};

console.log(x)
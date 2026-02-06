type User = {
    id: number;
    name: string;
    age: number;
    password: string;
};

type PublicUser = Pick<User, "id" | "name">;

const a: PublicUser = {
    id: 123,
    name: "Prajwal",
};



type SafeUser = Omit<User, "password">;
const b: SafeUser = {
    id: 134,
    name: 'pj18',
    age: 22,
    // password : "ecnivb"
}


type UpdateUser = Partial<User>;

const c: UpdateUser = {
    id: 123,
};


console.log(a)
console.log(b)
console.log(c)
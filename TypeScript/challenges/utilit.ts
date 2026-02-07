// Utility Challenges

// Recreate TypeScript's built-in utility types (Pick, Omit, Partial) from scratch
// Build a DeepPartial type that makes all nested properties optional
// Create a type that extracts all function property names from an object


type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

type User = {
    id: number;
    name: string;
    age: number;
    password: string;
};

type PublicUser = MyPick<User, "id" | "name">;

const a: PublicUser = {
    id: 123,
    name: "Prajwal",
};



type SafeUser = MyOmit<User, "password">;
const b: SafeUser = {
    id: 134,
    name: 'pj18',
    age: 22,
    // password : "ecnivb"
}


type UpdateUser = MyPartial<User>;

const c: UpdateUser = {
    id: 123,
};


console.log(a)
console.log(b)
console.log(c)


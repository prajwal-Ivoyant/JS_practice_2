// Advanced Types

// Create a deeply readonly type that makes all nested properties immutable
// Build a type that converts all string properties in an object to numbers
// Implement a type-safe form validator that infers field types from a schema

///////////////////////////////////////////////

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type User = {
    name: string;
    address: {
        city: string;
    };
};

type ReadonlyUser = DeepReadonly<User>;

const user: ReadonlyUser = {
    name: "Prajwal",
    address: { city: "Bangalore" },
};

// user.name = "New";           
// user.address.city = "Mysore"; 



/////////////////////////////////////////////////

type StringToNumber<T> = {
    [K in keyof T]: T[K] extends string ? number : T[K];
};

interface Data {
    id: string;
    count: number;
    name: string;
}

type Converted = StringToNumber<Data>;

const obj: Converted = {
    id: 101,       // must be number now
    count: 5,      // stays number
    name: 999,     // must be number now
};

// const obj2: Data = {
//   id: 101,       // must be number now
//   count: 5,      // stays number
//   name: 999,     // must be number now
// };



/////////////////////////////////////////////////
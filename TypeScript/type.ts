type User = {
    id: number;
    name: string;
};

type Admin = User & {
    role: string;
};

// type User = {
//     phno: number;
// };

const a: Admin = {
    id: 2,
    name: "Prajwal",
    role: "admin",
};

interface User {
    id: number;
    name: string;
}

interface Admin extends User {
    role: string;
}

const u: Admin = {
    id: 1,
    name: "Prajwal",
    role: "admin",
};

/////////////////////////////////////////

interface Car {
    brand: string;
}

interface Car {             // reopen
    model: string;
}

const c: Car = {
    brand: "BMW",
    model: "X5",
};

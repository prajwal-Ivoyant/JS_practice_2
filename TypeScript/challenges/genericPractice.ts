// Generics Practice

// Implement a generic pick function that extracts specific properties from an object
// Create a type-safe event emitter where events have specific payload types


// Build a generic response wrapper that handles success/error states with proper typing  => not done



function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;

    keys.forEach((k) => {
        result[k] = obj[k];
    });

    return result;
}

const user = { id: 1, name: 'Ram', email: 'ram@gmail.com' };
const picked = pick(user, ['id', 'email']);
console.log(picked)


////////////////////////////////////////////////


interface event {
    login: { userID: number };
    logout: { reason: string };
    error: { msg: string; code: number };
}

function event<E extends keyof event>(event: E, payload: event[E]) {
    console.log("event :", event);
    console.log("payload :", payload)
}

event("login", { userID: 12 })
event("error", { msg: "hello this is error", code: 12 })
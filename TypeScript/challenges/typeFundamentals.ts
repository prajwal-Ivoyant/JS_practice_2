// Type Fundamentals

// Create a function that accepts multiple types and returns different outputs based on the input type
// Build a type-safe configuration object for an app with nested optional properties
// Write a function that merges two objects while preserving type safety

function process(constant: unknown): any {

    const typess = typeof constant;

    switch (typess) {
        case "string": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "number": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "bigint": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "boolean": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "symbol": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "undefined": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "object": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
        case "function": return console.log(`passed argument is ""${typess}"" and constant value : ${constant}`);
    }


}

process('Prajwal P 1234567890')
process(() => { console.log('fffuunnccttion') })
process({ name: 'Prajwal P', id: 123 })


///////////////////////////////

interface job {
    id: number;
    todo: string;
    completed: boolean,
    userId: number;
}

interface todo {
    todos: job[];
    total: number;
    skip: number;
    limit: number;
}

async function getTodo(): Promise<todo> {
    const res = await fetch('https://dummyjson.com/todos')
    const data = await res.json()
    return data;
}
getTodo().then((todos) => {
    console.log(todos.todos[0]);

});

function mergeTodo(todo1: job, todo2: job): job {
    return { ...todo1, ...todo2 };
}

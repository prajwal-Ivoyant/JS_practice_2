// type of

function printValue(x: string | number) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    } else {
        console.log(x.toFixed(2));
    }
}

printValue(2.3334)
printValue('Guten Abend')


/// instance of

function formatDate(value: unknown) {
    if (value instanceof Date) {
        console.log(value.toISOString());
    } else {
        console.log("Not a Date");
    }
}

formatDate('acsd')
formatDate(new Date("2026-02-12"));

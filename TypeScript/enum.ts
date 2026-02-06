enum Permission {
    Read = "READ",
    Write = "WRITE",
    Delete = "DELETE"
}

function checkPermission(p: Permission) {
    if (p === Permission.Delete) {
        console.log(`${p} => Danger action!`);
    }
    else console.log(`${p} => nothing to worry`)
}

checkPermission(Permission.Read);
checkPermission(Permission.Delete)

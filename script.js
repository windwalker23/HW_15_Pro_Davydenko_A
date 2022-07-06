let a = {
    x: 10,
    y: 20,
}

let b = {
    x: 20,
    z: 30,
}

function assignObjects(obj1, obj2) {
    let conc = {};
    for(let key in obj1) {
        conc[key] = obj1[key];
    }
    for(let key in obj2) {
        conc[key] = obj2[key];
    }
    return conc;
}

let c = assignObjects(a, b);
console.log(c);
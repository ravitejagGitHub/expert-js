function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


function clone2(obj) {
    const cloneObj= {}
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (typeof value === "object") {
            cloneObj[key] = clone2(value);
        } else {
            cloneObj[key] = value;
        }
    })
    return cloneObj;
}

var obj1 = {
    a: 1,
    b: 2, 
    c: {
        x: 3,
        y: 4,
        z: {
            p: 5,
            q: 6
        }
    },
    d: 7
};

var obj2 = obj1;

var obj3 = { ...obj1 }; // one level clone

var obj4 = clone(obj1); // complete clone

var obj5 = clone2(obj1); // complete clone



obj1.a = 10;
obj1.c.x = 14;
obj1.c.z.p = 15;

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
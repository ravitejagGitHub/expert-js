function printN(n) {
    for (let i = 1; i <= n; i++) {
        setTimeout(() => console.log(i), 1000 * i);
    }
};

function printN2(n) {
    for (var i = 1; i <= n; i++) {
        (function(i) {
            setTimeout(() => console.log(i), 1000 * i);
        })(i)
    }
};

function printN3(n) {
    new Array(n).fill(0).forEach((val, i) => {
        setTimeout(() => console.log(i+1), 1000 * i);
    })
};



printN3(5);
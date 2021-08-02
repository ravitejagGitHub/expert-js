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



printN2(5);
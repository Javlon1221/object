
function oddNumbersLoop() {
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }
}

console.log("Loop:"); oddNumbersLoop();



function tensLoop() {
    for (let i = 100; i >= 0; i -= 10) {
        console.log(i);
    }
}

console.log("Loop:"); tensLoop();



function sumLoop() {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

console.log("Loop:", sumLoop());

// Kutilgan natija: 55

// 4) n soni berilgan "Laylo" ismini n marta qaytarish

function printLayloLoop(n) {
    for (let i = 0; i < n; i++) {
        console.log("Laylo");
    }
}

console.log("Loop:"); printLayloLoop(5);


function powerLoop(a, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= a;
    }
    return result;
}

console.log("Loop:", powerLoop(2, 3));
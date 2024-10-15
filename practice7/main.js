


function getSum(a, b) {
    return a + b;
}


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
function greeting(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}




function getMin(a, b, c) {
    return Math.min(a, b, c);
}


function evenOrOdd(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
        return "even";
    } else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
        return "odd";
    } else {
        return "even/odd";
    }
}


function inOrOutRange(x, y, num) {
    return (num >= x && num <= y) ? "In range" : "Out of range";
}



function createString(min, max, step) {
    let result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result.join(' ');
}

function rangeSum1(n, term) {
    let sum = 0;
    for (let i = 0; i <= term; i++) {
        sum += i;
    }
    return sum + rangeSum1(n, term - 1); 
}


function rangeSum2(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
}


function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2).toString();
}


function countDigits(num) {
    return num.toString().length;
}

// Display 
const outputDiv = document.getElementById('output');
outputDiv.innerHTML += `<p>Sum of 5 and 3: ${getSum(5, 3)}</p>`;
outputDiv.innerHTML += `<p>Is 9 a square number? ${isSquare(9)}</p>`;
outputDiv.innerHTML += `<p>${greeting('Bill', 'Jacobson', 33)}</p>`;
outputDiv.innerHTML += `<p>Minimum of 5, 9, 7: ${getMin(5, 9, 7)}</p>`;
outputDiv.innerHTML += `<p>Even or Odd (2, 4, 8): ${evenOrOdd(2, 4, 8)}</p>`;
outputDiv.innerHTML += `<p>Is 8 in range 5-10? ${inOrOutRange(5, 10, 8)}</p>`;
outputDiv.innerHTML += `<p>String of numbers from 0 to 20 with step 5: ${createString(0, 20, 5)}</p>`;
outputDiv.innerHTML += `<p>Sum of range 5 to 10: ${rangeSum2(5, 10)}</p>`;
outputDiv.innerHTML += `<p>Series sum up to 5: ${seriesSum(5)}</p>`;
outputDiv.innerHTML += `<p>Number of digits in 123654789: ${countDigits(123654789)}</p>`;

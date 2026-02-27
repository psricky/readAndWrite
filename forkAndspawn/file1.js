
process.on('message', (data) => {

    const fib= function fibonacci(n) {
    if (n < 0) return null; // invalid
    if (n === 0) return 0;
    if (n === 1) return 1;
    // recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result= fibonacci(data.number);
process.send(result)

});
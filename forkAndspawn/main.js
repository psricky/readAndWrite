// fibonacci calculator (recursive)
// usage: node file1.js <n>

const { fork } = require('child_process');

console.log('Starting computation');


const child = fork('./file1.js');

child.send({ number: 40 });

child.on('message', (data) => {
    console.log('Response received from child process: ', data); 
});

console.log('Compuation done'); 
//const result = fibonacci(40);



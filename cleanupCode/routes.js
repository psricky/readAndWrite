const fs=require('fs');
const requestHandler = (req, res) => {
    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.end(`
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username"></input>
                    <button type="submit">Add</button>
                    </form> 
                    `);
    } else if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const buffer = Buffer.concat(body)

            const formData = buffer.toString();

            const formValues = formData.split('=')[1];
            console.log(formValues);

            fs.writeFile('formValues.txt', formValues, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                }

            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
}

const anotherFunctoin = () => {
    console.log('This is another function');
}

//module.exports = requestHandler;
// module.exports = {
//     requestHandler,
//     anotherFunctoin
// };
module.exports = {
    handler:requestHandler,
    testFunction:anotherFunctoin
};
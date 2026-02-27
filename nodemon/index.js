const http=require('http');

const server=http.createServer((req,res)=>{
    
    if(req.url==='/'){
        
        res.end(`
            <h1>Welcome to my server</h1>
            <h1>This is the home page</h1>
            <p>This is a simple Node.js server.</p>
        `);
    }

});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
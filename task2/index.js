const http=require('http');

const fs=require('fs');
const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;
    if(url==='/'){

        res.setHeader('Content-Type','text/html');

        fs.readFile('formValues.txt','utf8',(err,data)=>{
            let fileContent='';
            if(!err && data){
                fileContent=data;
            }
            res.end(`
                <p>${fileContent}</p>
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username" ></input>
                    <button type="submit">Add</button>
                </form>
                
            `)
        })
    }else{
        if(req.url=='/message' && method=='POST'){
            res.setHeader('Content-Type','text/html');
            let body=[];
            req.on('data',(chunks)=>{
                console.log(chunks);
                body.push(chunks);
            });
            req.on('end',()=>{
                const formData=Buffer.concat(body).toString();
                console.log(formData);
                let formValues=formData.split('=');
                console.log(formValues[1]);
                fs.writeFile('formValues.txt',formValues[1],(err)=>{
            });
            res.statusCode=302;
            res.setHeader('Location','/');
            res.end();

        })
    }
}

});
server.listen(3002,()=>{
    console.log('Server is running');
});
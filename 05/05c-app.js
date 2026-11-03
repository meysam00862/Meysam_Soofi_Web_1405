
import {framework} from './05a-framework.js';
import { writeFile, readFile ,unlink ,rmdir, mkdir} from 'node:fs';


const app = framework();

app.get('sum', function (request, response) {
    let items = request.url.split('/');

    response.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    response.write((Number(items[2]) + Number(items[3])).toString());
    response.end();
});
app.get('createFile', function (request, response) {
            let items = request.url.split("/");

            writeFile(items[2], items[3], function (error) {
                if (error) {
                    console.log("error", error);
                    response.writeHead(500);
                    response.write("createFile error");
                    response.end();
                    
                }
                else{
                console.log("createFile done");

                response.writeHead(200);
                response.write("createFile done");
                response.end();
                }
            });
        });





app.get('readFile', function (request, response) {
             let items = request.url.split("/");

         readFile(items[2], "utf8", function (error, body) {
             if (error) {
                 console.log("error", error);

                 response.writeHead(500);
                 response.end("readFile error");
             } else {
                 console.log("readFile done");

                 response.writeHead(200);
                 response.end(body);
             }
         });
     });



app.get('deleteFile', function (request, response) {
    let items = request.url.split("/");

    unlink(items[2], function (error) {
        if (error) {
            console.log("error", error);

            response.writeHead(500);
            response.end("deleteFile error");
        } else {
            console.log("deleteFile done");

            response.writeHead(200);
            response.write("deleteFile done");
            response.end()
        }
    });
});

app.get('delete', function (request, response) {
    let items = request.url.split("/");

    unlink(items[2], function (error) {
        if (error) {
            console.log("error", error);
            if(error.code ==='EPERM'){
                rmdir(items[2], function(error){
                    if(error){
                        response.writeHead(500)
                        response.write("delete error")
                        response.end();
                    }else{
                        console.log("delete folder done.")
                    }
                })
            }
            
        } else {
            console.log("delete done");

            response.writeHead(200);
            response.write("delete done");
            response.end()
        }
    });
});

app.get("signup",function( request, response){
    writeFile("Users.json", request.data, function (error) {
        if (error) {
            console.log("error", error);
            response.writeHead(500);
            response.write("createFile error");
            response.end();
            
        }
        else{
        console.log("createFile done");

        response.writeHead(200);
        response.write("createFile done");
        response.end();
        }
    });
});

app.listen(3000, () => {
    console.log(`Server Runnig on port 3000`);
});
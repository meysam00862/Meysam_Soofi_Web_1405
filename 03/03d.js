import {createServer} from 'http';

let controllers = [
    {
        name:"/sum",
        func: function(request, responce){
            let nums = request.url.split("/");
            let result = Number(nums[2])+Number(nums[3]);
            responce.writeHead(200);
            responce.write(result.toString())
            responce.end();
        }
    }
]
function returnRequest(request, responce) {
    let found = false;
    console.log(request.url)
    for (let i = 0; i < controllers.length; i++) {
        if (request.url.startsWith(controllers[i].name)){
            controllers[i].func(request, responce)
            found = true;
            break;
        } 
    }
    if(!found){
        console.log("Command not found!")
    }
}
let server = createServer(returnRequest);
server.listen(555);

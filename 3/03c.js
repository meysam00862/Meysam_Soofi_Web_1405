import {createServer} from 'http';

function returnRequest(request, responce) {
    let nums = request.url.split("/");
    let result = Number(nums[1])+Number(nums[2]);
    responce.writeHead(200);
    responce.write(result.toString())
    responce.end();
}
let server = createServer(returnRequest);
server.listen(555);

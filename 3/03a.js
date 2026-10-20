import {createServer} from 'http';

function returnRequest() {
    console.log("------------")
}
let server = createServer(returnRequest);
server.listen(555);

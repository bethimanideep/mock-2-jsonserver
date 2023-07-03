const jsonserver = require("json-server");
const cors = require("cors")
const server = jsonserver.create()
const router = jsonserver.router("./db.json");
const middlewares = jsonserver.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonserver.bodyParser);
server.use(router);
server.listen(4500, () => {
    console.log("server running");
})

const http = require("http");
const app = require("./app/app");
require("dotenv").config();
const defaultPort = process.env.port

http.createServer(app).listen(defaultPort, ()=>{
    console.log(`Server running on port: ${defaultPort}`)
});


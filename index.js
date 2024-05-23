//import json-server
const jsonServer = require('json-server')
//create server for ReadRack app
const ReadRackServer = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//define route for json file in server
const route = jsonServer.router('db.json')
//set up port for running server app
const PORT = 3000 || process.env.PORT

ReadRackServer.use(middleware)
ReadRackServer.use(route)
ReadRackServer.listen(PORT,()=>{
    console.log(`ReadRack Server Started at port ${PORT} and waiting for client request`);
})
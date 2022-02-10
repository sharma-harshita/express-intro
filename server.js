// We will be creating the server using express framework.

// in this we are importing express module
const express = require("express");

// in this we are creating server using express
const app = express();

app.get("/user", function(request, response){
    const user = {name:"harshita"}
    response.send(user);
})
app.get("/", function(request, response){
    response.send("Hello main route");
})


// /api/v1


// defining all the routes in the same server.js file is not a good practice
// we will create one main route and then all the other routes will be added to this main route

// app.use("/api/v1", ExpressRouter)

app.listen(4000, function(res, err){
    console.log("Application is running");
});


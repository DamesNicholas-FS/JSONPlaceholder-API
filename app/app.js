const express = require('express');
const todosRouter = require('../router/todosRouter');
const app = express();

//http://localhost:3000
app.get('/', (req, res ,next) => {
    res.status(200).send("Service is up!")
})

// Router / Middleware
app.use("/todos", todosRouter)

//Middleware - handle errors and bad URL paths
app.use((req, res, next)=>{
    const error = new Error("NOT FOUND!!");
    error.status= 404;
    next(error)
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
})

module.exports = app;
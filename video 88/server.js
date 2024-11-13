const express = require('express')
const app = express()
const port = 3000

// app.get or app.post or app.put or app.delete(path,handler)

// get request is used requesting through chrome search Bar 
// Origional code 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Uses 
app.get('/about', (req, res) =>{
    res.send("Welcome to About Page ")
})
app.get('/contact', (req, res) =>{
    res.send("this is Contact Page ")
})
app.get('/blog', (req, res) =>{
    res.send("this is Blog i hope you are Fine i am Narendra Singh form Rishihood University")
})

app.get('/into-js', (req,res) =>{
    // logic to fetch blog of code from database 
    res.send("welcome to jS")
})
app.get('/into-python', (req,res) =>{
    // logic to fetch blog of code from database 
    res.send("welcome to Python")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
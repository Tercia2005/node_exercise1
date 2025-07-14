
import express from 'express'

// initalizes app
const app = express()


// create get path
// 2 para , path and function
app.get('/getInfo', (req, res) => {
  res.json ({
    message: "Hi, you visited the API"
  })

})


app.get('/name',(req, res) => {
    res.json ({
        message: "Hi my name is Tercia!"
    })
})


app.post('/add', (req,res) => {
    res.json({message: "This post route has run successfully"})
})



app.delete('/delete', (req,res) => {
    res.json({message: "This delete route has run successfully"})
})



app.patch('/patch', (req,res) => {
    res.json({message: "This patch route has run successfully"})
})



// install thunder client 


// lets app be accessed from link/hosting
// port number must be 4 digits and more than 3000
app.listen(7070,()=>{
     console.log('http://localhost:7070');
     


})
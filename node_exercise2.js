import express from 'express'

const app = express() 


app.get('/employees', (req, res) => {
  res.json ({
    message: "The get method for employees is successful"
  })

})


app.get('/managers', (req, res) => {
  res.json ({
    message: "The get method for managers is successful"
  })

})



app.post('/employees', (req, res) => {
  res.json ({
    message: "This is the post method for employees and data was added"
  })

})


app.post('/managers', (req, res) => {
  res.json ({
    message: "This is the post method for managers and data was added"
  })

})



app.delete('/employees', (req, res) => {
  res.json ({
    message: "This is the delete method for employees and data was removed"
  })

})


app.delete('/managers', (req, res) => {
  res.json ({
    message: "This is the delete method for managers and data was removed"
  })

})



app.patch('/employees', (req, res) => {
  res.json ({
    message: "This is the patch method for employees and data was updated"
  })

})

app.patch('/managers', (req, res) => {
  res.json ({
    message: "This is the patch method for managers and data was updated"
  })

})

app.listen(9090,()=>{
     console.log('http://localhost:9090');
     


})


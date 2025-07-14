import express from 'express'

const app = express() 


app.get('/products', (req, res) => {
  res.json ({
    message: "The get method for products is successful"
  })

})


app.get('/users', (req, res) => {
  res.json ({
    message: "The get method for users is successful"
  })

})



app.post('/users', (req, res) => {
  res.json ({
    message: "This is the post method for users and data was added"
  })

})


app.post('/products', (req, res) => {
  res.json ({
    message: "This is the post method for products and data was added"
  })

})



app.delete('/users', (req, res) => {
  res.json ({
    message: "This is the delete method for users and data was removed"
  })

})


app.delete('/products', (req, res) => {
  res.json ({
    message: "This is the delete method for products and data was removed"
  })

})



app.patch('/users', (req, res) => {
  res.json ({
    message: "This is the patch method for users and data was updated"
  })

})

app.patch('/products', (req, res) => {
  res.json ({
    message: "This is the patch method for products and data was updated"
  })

})

app.listen(8080,()=>{
     console.log('http://localhost:8080');
     


})


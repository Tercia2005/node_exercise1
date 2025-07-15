

import express from 'express'
import mysql from 'mysql2/promise'
// allows to use async and await functions


// initalizes app
const app = express()

//middleware

app.use(express.json())


const pool = mysql.createPool({
    database: 'global_diversity',
    user: 'root',
    password: 'Tertristyr@3',
    host: '127.0.0.1'
})


const getEmployees = async () =>{
    let [info, columns] = await pool.query(`SELECT * FROM employees`)
    return info 
}
console.log(await getEmployees())


// create get path
// 2 para , path and function
app.get('/employees', async (req, res) => {
  res.json ({
    data: await getEmployees()
  })

}) 

app.post('/employees', async (req, res) => {
  
  let {e_id, e_name, email, phone, d_id} = req.body 


  await addEmployee (e_id, e_name, email, phone, d_id)

  // console.log(e_id, e_name, email, phone, d_id);
  

  res.json ({
    message: "A new employee was added"
  })

})


//delete employee

const deleteEmployee = async (e_id) =>{
  await pool.query(`DELETE FROM employees WHERE (employee_id = ?);`, [e_id])
  //query then []
}

deleteEmployee(13)

app.delete('/employees/:id', async (req, res) => {

   let id = req.params.id
   await deleteEmployee(id)


  res.json ({
    message: "You have deleted an employee successfully"
  })

}) 

//update employee

const updateEmployee = async ( e_name, email, phone, d_id, e_id) =>{

  await pool.query(`UPDATE employees SET employee_name = ? , email= ?, phone= ?, department_id = ? WHERE (employee_id = ?);`,[ e_name, email, phone, d_id, e_id]
    )
}


updateEmployee( "Thomas", "thomas@mzansi.com", "0217894568", "201", 11)

app.patch('/employees/:id', async (req, res) => {

  let employee_id = req.params.id
  let {e_id, e_name, email, phone, d_id} = req.body

  let employee = await fetchSingleUser(employee_id)
   console.log(email);
   e_id ? employee_id = employee_id : employee_id=  employee.e_id,
   e_name ? e_name = e_name : e_name = employee.e_name
   email ? email = email : email = employee.email
   phone ? phone = phone : phone = employee.phone
   d_id ? email = email : email = employee.d_id

   console.log(email);
  
  await updateEmployee (e_id, e_name, email, phone, d_id)

  // console.log(e_id, e_name, email, phone, d_id);

  res.json ({
    message: "You have updated an employee successfully"
  })

}) 


//create function to update

const fetchSingleUser = async(id) =>{
  let [[row]] = await pool.query (`SELECT * FROM global_diversity.employees WHERE employee_id = ? ;`,[id])

  return row
}






//question mark is placeholder for data in table
//remove all backticks and inverted commas, leave only one set of backticks ``

const addEmployee = async (e_id, e_name, email, phone, d_id) => {
  await pool.query (`INSERT INTO employees (employee_id, employee_name, email, phone, department_id) VALUES (?, ? , ?, ?, ?);`,
    [e_id, e_name, email, phone, d_id])
}


//add new employee



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
    // serves our app with a port , in browser.
     
 

})
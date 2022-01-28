const express = require('express')
const app = express()

app.get('/', (request, response) =>{
    response.send('Hola desde mi primer api')    
})

app.listen(8080, ()=>{
    console.log('server is listening')
})

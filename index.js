const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.status(200).json({msg:"Hello World"})
})

app.listen(PORT || 5000, () => {
    console.log(`Server running at Port : ${PORT || 5000}`)
})
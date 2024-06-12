const express = require("express")
const app = express()
const port = 4000

app.get("/", (req,res)=>{
    res.json({mensaje:"aplicacion funcionando correctamente"})
})

app.listen(port, ()=>{
    console.log (`Aplicacion corriendo por el puerto ${port}`)
}) 
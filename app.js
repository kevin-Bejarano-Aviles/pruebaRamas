const express = require('express');
const app = express();
const port = 3000;
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"Página 404",
        laUrl:req.url
    })
})

app.listen(port,()=>{
    console.log(`
    ***********************
    Servidor corriendo en el puerto:${port}
    
    link: ----> http://localhost:${port}

    ***********************
    `);
})
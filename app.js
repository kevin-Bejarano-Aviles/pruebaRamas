const express = require('express');
const app = express();
const port = 3000;
const principal = require('./routes/rutasPrincipales');
const usuarios = require('./routes/rutasUsuarios');
const cursos = require('./routes/rutasCursos');

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));

app.use('/',principal);
app.use('/users',usuarios);
app.use('/cursos',cursos);

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
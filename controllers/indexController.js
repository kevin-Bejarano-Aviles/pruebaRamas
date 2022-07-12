module.exports = {
    index:(req,res)=>{
        res.render('index',{
            titulo:'Index pag cursos'
        });
    },
    nosotros:(req,res)=>{
        res.render('nosotros',{
            titulo:'cursos nosotros'
        });
    }
}
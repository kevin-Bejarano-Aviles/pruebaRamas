const express = require ('express');
const router = express.Router();

router.get('/',(req,res)=>[
    res.render('usuarios/perfil',{
        titulo:'Perfil de ...'
    })
])

module.exports = router;
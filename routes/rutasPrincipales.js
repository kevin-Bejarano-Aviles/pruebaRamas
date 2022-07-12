const express = require ('express');
const router = express.Router();
const {index,nosotros}=require('../controllers/indexController');

router.get('/',index);
router.get('/nosotros',nosotros);


module.exports = router;
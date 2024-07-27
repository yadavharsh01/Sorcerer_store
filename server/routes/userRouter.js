const userCtrl = require('../controllers/userCtrl');

const router = require('express').Router();

// router.post('/register',(req,res)=>{
//     res.json({msg:"Testing"})
// })
router.post('/register', userCtrl.register);

module.exports = router;
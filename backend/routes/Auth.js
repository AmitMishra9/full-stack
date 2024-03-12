const express =require('express');
const router=express.Router();

const authController=require('../controllers/Auth');

router.post("/login",authController.login);
router.post("/rigester",authController.rigester);
router.post("/logout",authController.logout);




module.exports=router;
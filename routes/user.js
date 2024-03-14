const express=require('express');
const routs=express.Router();
const userController=require('../controllers/userController')

routs.get('/',userController.home)
routs.get('/blog_single/:id',userController.blog_single)

module.exports=routs;


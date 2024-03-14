const express=require('express');
const routs=express.Router();
const adminController=require('../controllers/adminController');
const Admin=require('../models/adminModel');
const passport=require('passport');
const passportLocal=require('../config/passportLocal')

routs.get('/dashboard',adminController.dashboard);
routs.get('/',adminController.logIn)
routs.post('/signIn',adminController.signIn)
routs.get('/add_admin',adminController.addAdmin);
routs.get('/view_admin',adminController.viewAdmin);
routs.post('/insertAdminData',Admin.uploadImage,adminController.insertAdminData);
routs.get('/deleteAdmin/:id',adminController.deleteAdmin);
routs.get('/editRecord',adminController.editAdmin);
routs.post('/editAdminData/:id',Admin.uploadImage,adminController.editAdminData);
routs.get('/logout',async(req,res)=>{
    res.clearCookie('admin');
    return res.redirect('/admin');
})
routs.get('/profile',adminController.profile)
routs.get('/password',adminController.password);
routs.post('/changePass',adminController.changePass);
routs.get('/forgetPass',adminController.forgetPass)
routs.post('/checkEmailForget',adminController.checkEmailForget)
routs.get('/checkOTP',adminController.checkOTP)
routs.post('/verifyOtp',adminController.verifyOtp)
routs.get('/adminChangePassword',adminController.adminChangePassword)
routs.post('/resetPass',adminController.resetPass)
routs.post('/deleteMultipleRecords',adminController.deleteMultipleRecords)
routs.get('/deactive/:id',adminController.deactive)

// Blog Website
//slider
routs.use('/slider',require('./slider'))
routs.use('/others',require('./others'))
routs.use('/photos',require('./photos'))
routs.use('/offers',require('./offers'))
routs.use('/posts',require('./posts'))


module.exports=routs;
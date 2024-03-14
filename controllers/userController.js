const sliderModel=require('../models/sliderModel')
const othersModel=require('../models/othersModel')
const photosModel=require('../models/photosModel')
const offersModel=require('../models/offersModel')
const blogModel=require('../models/postModel')
const postModel=require('../models/postModel')

module.exports.home=async(req,res)=>{
    try{
        let sliderData=await sliderModel.find();
        let othersData=await othersModel.find();
        let photosData=await photosModel.find();
        let offersData=await offersModel.find();
        let blogData=await blogModel.find();
        let postsData=await postModel.find();
        if(sliderData){
            console.log(sliderData);
            return res.render('userPanel/home',{
                sliderData:sliderData,
                othersData:othersData,
                photosData:photosData,
                offersData:offersData,
                blogDataData:blogData,
                postsData:postsData,
            })
        }
      
        else{
            req.flash('error','something wrong!')
            return res.redirect('back')
        }
    }
    catch(err){
        req.flash('error','something wrong!');
        return res.redirect('back')
    }
}

module.exports.blog_single=async(req,res)=>{
    try{
        let singleData=await postModel.findById(req.params.id);
        if(singleData){
            return res.render('userpanel/blog_single',{
                singleData:singleData
            })
        }
    }
    catch(err){
        req.flash('error','something wrong!')
        return res.redirect('back')
    }
}
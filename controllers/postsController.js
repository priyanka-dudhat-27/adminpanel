const postModel=require('../models/postModel')
const fs=require('fs')
const path=require('path')
const moment=require('moment')

module.exports.add_posts=async(req,res)=>{
    return res.render('add_posts')
}
module.exports.insertPostsData=async(req,res)=>{

    console.log(req.body)
    console.log(req.file)
    try{
        var img='';
        if(req.file){
            img=postModel.postIpath+'/'+req.file.filename;
        }
        req.body.postsimage=img;
        req.body.username=req.user.name;
        req.body.created_date=moment().format('LLL');

        let adddata=await postModel.create(req.body);
        if(adddata){
            req.flash('success','post data added successfully')
            return res.redirect('back')
        }
        else{
            req.flash('error','Something is wrong !');
            return res.redirect('back');
        }
    }
    catch(err){
        console.log(err);
        req.flash('error','wrong !')
        return res.redirect('back')
    }

}

module.exports.view_posts=async(req,res)=>{
    try{
        let singleData=await postModel.find();
        if(singleData){
            return res.render('view_posts',{
                singleData:singleData
            });
        }else{
            req.flash('error','something wrong !')
            return res.redirect('back')
        }
    }
    catch(err){
        console.log(err);
        req.flash('error','something wrong !')
        return res.redirect('back')
    }
}


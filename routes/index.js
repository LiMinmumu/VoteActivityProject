var express = require('express');
var router = express.Router();


/*中秋节投票活动首页*/
  router.get('/vote',function(req,res,next){
    res.render('workv2/index')
  });
    /*注册页面*/
  router.get('/register',function(req,res,next){
    res.render('workv2/register')
  });
    /*参加活动的用户列表页*/
  router.get('/list',function(req,res,next){
    res.render('workv2/ranklist')
  });
    /*个人展示页*/
  router.get('/profile',function(req,res,next){
    res.render('workv2/profile')
  });

/*公益活动详情页*/
  router.get("/detail",function(req,res,next){
    res.render('workv2/detail')
  });

module.exports = router;

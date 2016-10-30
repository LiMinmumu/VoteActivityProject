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
  /*router.get('/list',function(req,res,next){
    res.render('workv2/ranklist')
  });*/
    /*个人展示页*/
  router.get('/profile',function(req,res,next){
    res.render('workv2/profile')
  });

/*公益活动详情页*/
  router.get("/detail",function(req,res,next){
    res.render('workv2/detail')
  });

/*个人中心-参加的公益和我的公益*/
  router.get('/joinedcharity',function(req,res,next){
    res.render('workv2/joinedcharity')
  });
  router.get('/mycharity',function(req,res,next){
   res.render('workv2/mycharity')
  });

//捐赠
router.get('/charityparticipant',function(req,res,next){
  res.render('workv2/charityparticipant')
});
router.get('/todonate',function(req,res,next){
  res.render('workv2/todonate')
});


router.get("/list",function(req,res,next){
  res.render('index')
});
/*新人专享大礼包*/
router.get('/giftpackage',function(req,res,next){
  res.render('NewSpecialGiftPackage')
});
/*双十一砍价活动*/
router.get('/bargin',function(req,res,next){
  res.render('bargin')
});
/*95回馈活动*/
router.get("/feedback",function(req,res,next){
  res.render("apple")
});
module.exports = router;

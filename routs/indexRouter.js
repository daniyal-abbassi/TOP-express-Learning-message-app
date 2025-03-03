const {Router} = require('express');
const indexRouter = Router();
const data=require('../data');



  indexRouter.get('/',(req,res)=>{
    res.render('../views/index',{messages: data.messages})
  })

indexRouter.get('/message/:id',(req,res)=>{
  const messageId = req.params.id;
  const message = data.messages[messageId];
  res.render('../views/message', {message})
})

  module.exports=indexRouter
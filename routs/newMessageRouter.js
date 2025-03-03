const {Router} = require('express');
const newMessageRouter = Router();
const data = require('../data')

newMessageRouter.get('/',(req,res)=>{
    res.render('../views/form')
})

newMessageRouter.post('/',(req,res)=>{
    const messageText = req.body.text;
    const messageUser = req.body.user;
    data.messages.push({text: messageText, user: messageUser, added: new Date()})
    res.redirect('/')
})

module.exports=newMessageRouter;
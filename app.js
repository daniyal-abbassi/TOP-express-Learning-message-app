const express = require('express');
const path = require('node:path');
const indexRouter = require('./routs/indexRouter');
const newMessageRouter = require('./routs/newMessageRouter');
const app = express();
const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath))

app.use(express.urlencoded({extended: true}))

app.set('view engine','ejs')


app.use('/',indexRouter);
app.use('/new',newMessageRouter);

app.listen(3000,(err)=>console.log(err))
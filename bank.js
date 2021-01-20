const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static('public'));

app.set("view engine","ejs");

 app.get('/',(req,res)=>{
     res.render('home');
 })

 app.get('/user',(req,res)=>{
     res.render('user')
 })
 app.get('/selectUser',(req,res)=>{
    res.render('selectUser')
})
 app.listen(4000)
console.log('server started at port 4000');

const express = require("express");
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const Sequelize = require("sequelize");

app.engine('handlebars', engine({defaultLayout: false}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('home')
});

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req,res){
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(function () {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: "+erro)
    })
})


app.listen(8090, function () {
    console.log("servidor rodando")
});
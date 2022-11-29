const Sequelize = require("sequelize");
const sequelize = new Sequelize ('users', 'root', '123456', {
    host: "localhost", dialect: "mysql"
});

const Admin = sequelize.define('admnistrator', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING(200)
    }
});

/*Admin.sync({force:true});*/

const Commom = sequelize.define('commom', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING(200)
    }
});

/*Commom.sync({force:true});*/

const blogPosts = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING(50)
    },
    content: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.STRING(30)
    }
});

/*blogPosts.sync({force:true});*/

const eBooks = sequelize.define('ebooks', {
    title: {
        type: Sequelize.STRING(50)
    },
    publishYear: {
        type: Sequelize.INTEGER
    },
    gender: {
        type: Sequelize.STRING(30)
    }
});

/*eBooks.sync({force:true});*/





Admin.create ({
    name: "Samuel Carvalho",
    email: "samuel@email.com"
});

Commom.create ({
    name: "Clever",
    email: "clever@email.com",

    name: "Alana",
    email: "alana@email.com"
});

blogPosts.create ({
    title: "Prós e contras de comer feijão preto",
    content: "Prós: muito gostoso. Contras: flatulências.",
    category: "Nutricional"
})



sequelize.authenticate ().then(function(){
    console.log("Banco de dados conectado")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
});
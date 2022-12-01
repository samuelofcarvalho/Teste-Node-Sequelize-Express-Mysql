const Sequelize = require("sequelize");
const sequelize = new Sequelize ('users', 'root', '123456', {
    host: "localhost", dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*blogPosts.create ({
    title: "Prós e contras de comer feijão preto",
    content: "Prós: muito gostoso. Contras: flatulências.",
    category: "Nutricional"
});*/






sequelize.authenticate ().then(function(){
    console.log("Banco de dados conectado")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
});
const db = require('./db');
const Post = db.sequelize.define('blogpost', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }

})

//Post.sync({force:true});

module.exports = Post;
const db = require('knex')({
    client: 'mysql2',
    connection:{
        host: 'us-cdbr-iron-east-01.cleardb.net',
        user: '	bf225bf519504c',
        password: '	ae6fa2a3 ',
        database: 'heroku_fc2fae0b596094c',
        roles: 'admin'
    }
})
const app = require('./app')(db)
const port = process.env.PORT || 3000

const user = require('./models/user')
user.initiaiUser(db)()

app.listen(port,()=> console.log('Rodando o servidor'))

const db = require('knex')({
    client: 'mysql2',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'sitepol',
        roles: 'admin'
    }
})
const app = require('./app')(db)
const port = process.env.PORT || 3333

const user = require('./models/user')
user.initiaiUser(db)()

app.listen(port,()=> console.log('Rodando o servidor'))
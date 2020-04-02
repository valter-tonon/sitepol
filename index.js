const db = require('knex')({
    client: 'mysql2',
    connection:{
        host: 'mysql669.umbler.com',
        user: 'valter',
        password: 'testesite',
        database: 'sotepol',
        roles: 'admin'
    }
})
const app = require('./app')(db)
const port = process.env.PORT || 3000

const user = require('./models/user')
user.initiaiUser(db)()

app.listen(port,()=> console.log('Rodando o servidor'))

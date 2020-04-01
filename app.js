const init = db =>
{
const express = require('express')
const app = express()
const path = require('path')
const homeRouter = require('./routes')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')

app.use(bodyParser.urlencoded({extended: true}))
const session = require('express-session')

app.use(session({
    secret: 'MyRulez',
    name: 'sessionId'
}))
app.use(async(req,res,next)=>{
    const {user} = req.session

    res.locals = {
        user
    }
 next()
})

app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))




app.use(homeRouter(db))

return app
}
module.exports = init
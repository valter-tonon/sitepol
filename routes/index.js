

const init = db =>{
    const router = require('express').Router()
    const admin = require('./admin/index')
    const home = require('./home')

//Página Principal
router.use('/',home(db))

router.use('/admin', admin(db))


    return router
}
  
module.exports = init
const init = db =>{
    const router = require('express').Router()
    const control = require('../controller/index')
    const homeControl = require('../controller/home')
    const auth = require('../controller/auth')

router.get('/', homeControl.getHome(db))
   
// inserção inscritos no db
router.post('/', control.subscribeAdd(db))
   
//  Render admin
router.post('/login',auth.login(db))
router.get('/logout',auth.logout)

router.get('/login',control.getAdminLogin(db))
return router
}     
module.exports = init  

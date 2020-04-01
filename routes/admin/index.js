const init = db =>{
    const router = require('express').Router()
    const control = require('../../controller/index')
    const auth = require('../../controller/auth')

    router.use((req,res,next)=>{
        if(req.session.user){
           next()
            
         }else{
            res.redirect('/login')
        }
    })

    
router.get('/', control.getAdminHeader(db))
  
//   Edição banner inicial
router.post('/',control.bannerUpdate(db))
  
// user
router.get('/user', control.getAdminUser(db))
   
router.post('/user',control.userAdd(db))

router.get('/user/users', control.getAdminUserList(db))
  

router.get('/user/users/:id',control.userDelete(db))
   

router.get('/user/edit/:id', control.getAdminUserById(db))
  
router.post('/user/edit/:id',control.userUpdate(db))
  
// Render e crud sessão about
router.get('/about',control.getAdminSobre(db))

router.post('/about',control.aboutUpdate(db))
 
// render e crud sessão compromissos e agenda
router.get('/issues',control.getAdminIssue(db))
   
router.post('/issues',control.issuesUpdate(db))
    
// render e crud sessão events
router.get('/events',control.getAdminEvent(db))
    

router.get('/events/edit/:id', control.getAdminEventById(db))
  
router.post('/events/edit/:id', control.eventUpdate(db))
 
router.get('/events/new', control.eventAdd(db))
   
router.post('/events/new',control.eventAdminAdd(db))
router.get('/events/:id',control.eventDelete(db))
  
// render e crud sessão blog
router.get('/blog', control.getAdminBlog(db))
    
router.get('/blog/new',control.getAdminBlogNew(db))
    
router.post('/blog/new',control.postAdd(db))

   
router.get('/blog/edit/:id', control.getAdminBlogById(db))
   
router.post('/blog/edit/:id', control.postUpdate(db))
    
router.get('/blog/:id',control.postDelete(db))
   
//render e crud sessão inscritos
router.get('/inscritos', control.getAdminSubscribe(db))
  
router.get('/inscritos/:id',control.subscribeDelete(db))
    
// login



    return router
}
module.exports = init
const model = require('../models/index')

const labels= [
    {id: 'dashboard',url:'/admin', name: 'Banner Inicial', title:'Admin'},
    {id: 'person',url:'/admin/user', name: 'Cadastro Usuário',title:'Admin|User'},
    {id: 'content_paste',url:'/admin/about',  name: 'Quem sou',title:'Admin|About'},
    {id: 'library_books',url:'/admin/issues',  name: 'Compromissos',title:'Admin|Issues'},
    {id: 'calendar_today',url:'/admin/events',  name: 'Agenda',title:'Admin|Events'},
    {id: 'insert_photo',url:'#',  name: 'Galeria de fotos'},
    {id: 'switch_video',url:'#',  name: 'Link Videos'},
    {id: 'rss_feed',url:'/admin/blog',  name: 'Blog',title:'Admin|Blog'},
    {id: 'list',url:'/admin/inscritos',  name: 'Lista incritos',title:'Admin|Subscribe'},

]


const getAdminHeader = db => async(req,res)=>{
    const header = await model.getHeader(db)()
    res.render('admin/index',{
        header, labels , page_name : 'admin'
    })
}
const getAdminUser = db => async(req,res) =>{
    const user = await model.getUser(db)()
    res.render('admin/user/index',{
        user,labels,page_name : 'user'
    })
}
const getAdminUserList = db => async(req,res) =>{
    const user = await model.getUser(db)()
    res.render('admin/user/users',{
        user,labels ,page_name : 'user'
    })
}
const getAdminUserById = db => async(req,res) =>{
    const user = await model.getUserById(db)(req.params.id)
    res.render('admin/user/edit',{
        user,labels,page_name : 'user'
    })
}
const getAdminSobre = db => async(req,res) =>{
    const about = await model.getSobre(db)()
    res.render('admin/about/index',{
        about,labels,page_name : 'about'
    })
}
const getAdminIssue = db => async(req,res) =>{
    const issue = await model.getIssue(db)()
    res.render('admin/issues/index',{
        issue,labels, page_name : 'issue'
    })
}
const getAdminEvent = db => async(req,res) =>{
    const event = await model.getEvent(db)()
    res.render('admin/events/index',{
        event ,labels, page_name : 'event'})
    }
const getAdminEventById = db => async(req,res) =>{
    const event = await model.getEventById(db)(req.params.id)
    res.render('admin/events/edit',{
        event,labels, page_name : 'event'
    })
}
const getAdminBlog = db => async(req,res) =>{
    const posts = await model.getBlog(db)()
    res.render('admin/blog/index',{
        posts,labels ,page_name : 'blog'
    })
}

const getAdminBlogNew = db => async(req,res) =>{
    const post = await model.getBlog(db)()
    res.render('admin/blog/new',{
        post,labels,page_name : 'blog'
    })
}
const getAdminBlogById = db => async(req,res) =>{
    const posts = await model.getBlogById(db)(req.params.id)
    res.render('admin/blog/edit',{
        posts,labels, page_name : 'blog'
    })
}
const getAdminSubscribe = db => async(req,res) =>{
    const subscribe = await model.getSubscribe(db)(req.query)
    res.render('admin/inscritos/index',{
        subscribe,labels ,page_name : 'subscribe'
    })
}
const getAdminLogin = db => async(req,res) =>{
    await model.getUser(db)()
    res.render('login')

}
const subscribeAdd = db => async(req,res) =>{
    await db('subscribe').insert(req.body)
    res.redirect('/')
    alert('Email salvo com sucesso')
}
const bannerUpdate = db => async(req,res) =>{
    await db('header').update(req.body)
    res.redirect('/admin')
}
const userAdd = db => async(req,res) =>{
    await db('user').insert(req.body)
    res.redirect('/admin/user/users')
    
}
const userDelete = db => async(req,res) =>{
    await db('user').where({id: req.params.id}).del()
    res.redirect('/admin/user/users')
}
const userUpdate = db => async(req,res) =>{
    await db('user').where({id:req.params.id}).update(req.body)
    res.redirect('/admin/user/users')
    
 }
 const aboutUpdate = db => async(req,res) =>{
    await db('about').update(req.body)
    res.redirect('/admin/about')
    
}
const issuesUpdate = db => async(req,res) =>{
    await db('issues').update(req.body)
        res.redirect('/admin/issues')
        
}
const eventUpdate = db => async(req,res) =>{
    await db('events').where({id: req.params.id}).update(req.body)
    res.redirect('/admin/events')
}
const eventAdd = db => async(req,res) =>{
    res.render('admin/events/new',labels)
}
const eventAdminAdd = db => async(req,res) =>{
    await db('events').insert(req.body)
    res.redirect('/admin/events')
    
}
const eventDelete = db => async(req,res) =>{
    await db('events').where({id: req.params.id}).del()
    res.redirect('/admin/events')
}
const postAdd = db => async(req,res) =>{
    await db('blog').insert(req.body)
    res.redirect('/admin/blog')
    
 }
 const postUpdate = db => async(req,res) =>{
    await db('blog').where({id: req.params.id}).update(req.body)
    res.redirect('/admin/blog')
}
const postDelete = db => async(req,res) =>{
    await db('blog').where({id: req.params.id}).del()
    res.redirect('/admin/blog')
}
const subscribeDelete = db => async(req,res) =>{
    await db('subscribe').where({id: req.params.id}).del()
    res.redirect('/admin/inscritos/')
}

module.exports= {
    getAdminHeader,
    getAdminUser,
    getAdminUserList,
    getAdminUserById,
    getAdminSobre,
    getAdminIssue,
    getAdminEvent,
    getAdminEventById,
    getAdminBlog,
    getAdminBlogNew,
    getAdminBlogById,
    getAdminSubscribe,
    getAdminLogin,
    subscribeAdd,
    bannerUpdate,
    userAdd,
    userDelete,
    userUpdate,
    aboutUpdate,
    issuesUpdate,
    eventUpdate,
    eventAdd,
    eventAdminAdd,
    eventDelete,
    postAdd,
    postUpdate,
    postDelete,
    subscribeDelete
}
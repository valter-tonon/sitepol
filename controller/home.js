const model = require('../models/index')

const getHome = db => async(req,res) =>{
    const header = await model.getHeader(db)()
    const sobre = await model.getSobre(db)()
    const issue = await model.getIssue(db)()
    const event = await model.getEvent(db)()
    const videos = await model.getVideos(db)()
    const blog = await model.getBlog(db)()
    const subscribe = await model.getSubscribe(db)()
    res.render('index',{
        header,
        sobre,
        issue,
        event,
        videos,
        blog,
        subscribe
    })
}

module.exports = {
    getHome
}

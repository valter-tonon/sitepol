const getHeader = db => async()=>{  
    const header = await db('header').select('*')
      return header
  }
const getSobre =db => async()=>{  
  const sobre = await db('about').select('*')
        return sobre
    }
const getIssue = db=> async() =>{
  const issue = await db('issues').select('*')
      return issue
}
const getEvent = db=> async() =>{
  const event = await db('events').select('*')
  return event
}
const getVideos = db=> async() =>{
  const videos = await db('videos_galery').select('*')
  return videos
}
const getBlog = db=> async() =>{
  const blog = await db('blog').select('*')
  return blog
}

const getSubscribe = db=> async(query) =>{
 
  const subscribe = await db('subscribe').select('*').limit(10)
  return subscribe
}
const getUser = db=> async() =>{
  const user =  await db('user').select('*')
  return user
}
const getUserById = db => async(id) =>{
    const user = await db('user').select('*').where({id:id})
    return user
}
const getEventById = db => async(id ) =>{
    const event = await db('events').where({id:id})
    return event
}
const getBlogById = db => async(id) =>{
    const posts = await db('blog').select('*').where({id:id})
    return posts
}
module.exports = {
    getBlog,
    getEvent,
    getHeader,
    getIssue,
    getSobre,
    getSubscribe,
    getUser,
    getVideos,
    getUserById,
    getEventById,
    getBlogById
}
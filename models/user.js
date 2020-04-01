const bcrypt = require('bcryptjs')

const generatePassHash = passwd =>{
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(passwd, salt)
    return hash
}

const initiaiUser = db => async(id) =>{
    const count = await db('user').count('id as total')
    if(count[0].total === 0 ){
        const user = {
            name: 'Valter',
            email: 'valtertonon@hotmail.com',
            passwd: generatePassHash('1234'),
            email_checked: true,
            created: new Date(),
            updated: new Date()

        }
        await db('user').insert(user)
    }
    
}
const login = db => async(email, passwd)=>{
    const user = await db('user').select('*').where({email: email})
    if(user.length === 0){
        throw new Error("user not found")
    }
    if(!bcrypt.compareSync(passwd, user[0].passwd)){
        throw new Error('Invalid user')
    }
    return user
}
module.exports = {
    initiaiUser,
    login
}

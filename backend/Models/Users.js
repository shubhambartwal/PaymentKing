const mongoose= require('mongoose')
const userSchema=mongoose.createSchema({
    name:{},
    usename:{},
    password:{}
})
const User=mongoose.model('User',userSchema)
export default User;
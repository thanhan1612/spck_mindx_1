import mongoose from "mongoose";
const schema = await mongoose.Schema({
    username : {
        type: String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },role : {
        type:String,
        enum: ['USER','ARTIST','ADMIN'],
        required:true
    },phoneNumber : {
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    }
});
const UserModel = new mongoose.model("users",schema);
export default UserModel;
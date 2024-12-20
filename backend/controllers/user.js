import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
const UserControllers = {
    
    uploadUser : async(req,res) => {
        dotenv.config();
        console.log(req.body);
        try {
        const user = new UserModel(req.body);
        const hashPassword = await bcrypt.hash(req.body.password,10);
        console.log(req.body);
        const token = jwt.sign(req.body,process.env.SECRET_KEY,{expiresIn:'1h'});
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:'None'
        });
     
        user.password = hashPassword;
        await user.save();
        res.status(201).send({
            message:"Successful",
            newUser: user,
            
        })}
        catch (error) {
            res.status(400).send({message:error.message});
        }
    },
    loginUser: async (req,res) => {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        if (!user) {
            res.status(400).send({
                message:'no user found'
            })
        };
        const ifValid = await bcrypt.compare(password,user.password);
        if (!ifValid) {
            res.status(400).send({
                message:'Password is wrong '
            })
        };
        const token = jwt.sign(req.body,process.env.SECRET_KEY,{expiresIn:'1h'});
        res.cookie("token",token,{
            httpOnly:true
        });
        res.status(200).json({
            message: 'Login Successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.username, // Include additional user details if needed
            },
        });
    }
}
export default UserControllers;
import express from 'express';
import User from '../Schema/signUp.js';
import bcrypt from "bcrypt";

const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email}).then(res => res.toObject());
        if(!user){
            return res.status(401).send({status: 401, message: "user not found"})
        }
        const compare = await bcrypt.compare(password,user.password)
        if(!compare){
            return res.status(403).send({status: 403, message: "wrong password"})
        }
        delete user.password
        return res.status(200).send({status: 200, user, message: user})
    }
    catch(err){
        return res.status(400).send({status: 400, message: err.message})
    }
})

export default router;
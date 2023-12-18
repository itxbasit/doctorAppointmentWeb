import express from 'express';
import User from '../Schema/signUp.js';
import bcrypt from "bcrypt";

const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new User({...req.body, password});
        await user.save();
        return res.status(200).send({status: 200, message: "User added successfully"})
    }
    catch(err){
        console.log(err.message)
        return res.status(400).send({status: 400, message: err.message})
    }
})

export default router;
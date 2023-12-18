import express from 'express';
import User from '../Schema/appointment.js';

const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email}).then(res => res.toObject());
        
        if(!user){
            return res.status(401).send({status: 401, message: "user not found"})
        }
        else{
            return res.status(200).send({status: 200, message: user})
            
        }  
    }
    
    catch(err){
        return res.status(400).send({status: 400, message: err.message})
    }
})

export default router;
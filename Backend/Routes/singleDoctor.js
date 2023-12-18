import express from 'express'
import mongoose from 'mongoose';

const router = express.Router();

const doc = mongoose.connection.collection('doctorData')


let id = ""
router.post('/', async(req,res)=>{
    try{
        id =new mongoose.Types.ObjectId(req.query.id)
        res.status(200).send({message: "sucess"})
    }catch(err){
        res.status(400).send({message: err.message})
    }

})

router.get('/', async(req,res)=>{
    try{
        let data = await doc.findOne({_id: id});
        res.status(200).send({message: data})
    }catch(err){
        res.status(400).send({message: err.message})
    }
    
})


export default router
import express from 'express'
import mongoose from 'mongoose';

const router = express.Router();

const doc = mongoose.connection.collection('doctorData')


router.get('/', async(req, res)=> {
    try{
        const docData = await doc.find({}).toArray();
        
        res.status(200).send({message: docData})
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
})

export default router;
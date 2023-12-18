import express from 'express'
import mongoose from 'mongoose';

const User = mongoose.model('users');

const id = '6578f276f0d4a483bcbc2cee';

const router = express.Router()

router.post("/", async (req, res) => {
    if (req.body.id) {
        User.findById(req.body.id)
            .then(result => {
                delete result.password
                delete result._id
                const user = {
                    "name": result.name, "email": result.email, 
                    "url": result.url ? result.url : null
                }
                return res.status(200).send({ status: 200, message: user })
            })
            .catch(err => {
                return res.status(400).send({ status: 400, message: err.message })
            })
    }

});


export default router;

import express from 'express'
import User from '../Schema/appointment.js'
import mongoose from 'mongoose';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const appointData = (req.body.appointData)
        await User.findOneAndUpdate(
            { email: appointData.email },
            {
                $set: {
                    name: appointData.name, 
                },
                $addToSet: {
                    'appointmentsDetails': appointData.appointmentsDetails,
                  },
            },
            { upsert: true, new: true, runValidators: true  },
        )
        return res.status(200).send({ status: 200, message: "User added successfully" })
    }
    catch (err) {
        return res.status(400).send({ status: 400, message: err.message })
    }
})

export default router;
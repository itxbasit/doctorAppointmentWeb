import express from 'express';
import User from '../Schema/signUp.js';
import bcrypt from "bcrypt";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { email, old_password, password, url } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found');
        }

        // Verify the old password
        const isPasswordValid = await bcrypt.compare(old_password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid old password');
        }

        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(password, 10);

        // Update the user's password
        user.password = hashedNewPassword;
        if(url){
            user.url = url;
        }
        await user.save();

        return res.status(200).send({ status: 200, message: "Password changed successfully" })
    }
    catch (err) {
        return res.status(400).send({ status: 400, message: err.message })
    }
})

export default router;
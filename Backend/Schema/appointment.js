
import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },

    appointmentsDetails:[{
        type: Schema.Types.Mixed,
        required: true
    }]
})

const User = mongoose.model('appointment', userSchema);

export default User;

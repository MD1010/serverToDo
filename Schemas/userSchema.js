import mongoose, { version }  from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema
(
    {
        userName:
        {
            type: String,
            required: [true,'Username is required']
        },

        email:
        {
            type: String,
            required: [true,'Email is required']
        },

        password:
        {
            type: String,
            required: [true,'Password is required']
        }
    }
);
userSchema.set('versionKey', false);
const usersCollection = mongoose.model('Users',userSchema,'Users');

module.exports = usersCollection;
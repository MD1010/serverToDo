import mongoose  from 'mongoose';
const Schema = mongoose.Schema;

const toDoItemSchema = new Schema
(
    {
        content:
        {
            type: String,
            required: [true,'Content of the task is required']
        }
    }
);
toDoItemSchema.set('versionKey', false);
const itemInList = mongoose.model('missions',toDoItemSchema);

module.exports = itemInList;
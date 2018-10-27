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

const itemInList = mongoose.model('missions',toDoItemSchema);

module.exports = itemInList;
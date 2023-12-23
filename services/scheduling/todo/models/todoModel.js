import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {type :String, required:true},
    created:{type: Date, default: Date.now}
})

const Todo = mongoose.model('Todo', todoSchema);


export default Todo;
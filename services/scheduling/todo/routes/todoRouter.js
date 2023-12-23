
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import Todo from "./../models/todoModel.js";




export  const todoRoutes = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)+path.sep;

const cfg ={
    views:{
        path: __dirname + '..'+'/views' + path.sep,
        file:"Todo.html"
    }
}
todoRoutes.get("/", (req, res)=>{
    res.sendFile(path.join(cfg.views.path, cfg.views.file));
})
todoRoutes.post("/", (req, res)=>{
    const todo = new Todo({
			task: req.body.task,
			created: req.body.date,
		});
        todo.save()
        .then(result=>{
            res.redirect("/")
        })
    console.log(todo);
})

export default todoRoutes;


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
todoRoutes.get("/data", (req, res)=>{
    Todo.find()
    .then(result=>{
        res.json({ data: result });
    })
})
todoRoutes.get("/", (req, res) => {
	res.sendFile(path.join(cfg.views.path, cfg.views.file));
});
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

todoRoutes.delete("/data/:id", (req, res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(result=>{
        console.log(result);
        res.send("Task deleted successfully.");
    });
})

export default todoRoutes;

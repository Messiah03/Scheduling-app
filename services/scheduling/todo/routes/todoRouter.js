
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";



export  const todoRoutes = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)+path.sep;

const cfg ={
    views:{
        path: __dirname + '..'+'/views' + path.sep,
        file:"Todo.html"
    }
}
todoRoutes.all("/", (req, res, next)=>{
    if(req.method ==='GET'|| req.method ==='POST'){
        const dataFromClient = req.body;
        console.log(dataFromClient);
        res.sendFile(path.join(cfg.views.path, cfg.views.file));
    } else{
        next();
    }
})


export default todoRoutes;
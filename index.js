import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from "url";
import compression from "compression";

app.disable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + path.sep;
console.log(__dirname);
const cfg = {
	port: 3000,
	dir: {
		root: {
			path: path.join(__dirname, 'services', 'scheduling', 'todo', 'views'),
			file: "Todo.html",
		},
	},
};
console.log(cfg.dir.root.path);
app.use(compression());
app.use(express.json());
app.use(express.static(cfg.dir.root.path));
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, resp, next) => {
	if(req.method==='GET'||req.method==='POST'){
	const dataFromClient = req.body;
	console.log(dataFromClient);
	resp.sendFile(
		path.join(cfg.dir.root.path, cfg.dir.root.file)
	);
	}
	else{
		next();
	}
});


app.get("/chat/:id",(req, res, next)=>{
	res.send("Comming soon");
	next();
})

app.use((req, res) => {
	res.status(404).send("Not found");
});
app.listen(cfg.port, () => {
	console.log(`Listening!  on http://localhost:${cfg.port}/`);
});
console.dir(cfg, { depth: null, color: true });
export { cfg, app };

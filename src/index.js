import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from "url";
import compression from "compression";

app.disable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + path.sep;
const cfg = {
	port: 3000,
	dir: {
		root: {
			path: path.join(__dirname, "..", "front_end") + path.sep,
			file: "Todo.html",
		},
	},
};
app.use(compression());
app.use(express.static(cfg.dir.root.path));


app.get("/", (req, resp) => {
	resp.sendFile(path.join(cfg.dir.root.path, cfg.dir.root.file));
});

app.get("/chat",(req, res)=>{
	res.send("Comming soon");
})

app.use((req, res) => {
	res.status(404).send("Not found");
});
app.listen(cfg.port, () => {
	console.log(`Listening! (port ${cfg.port})`);
});
console.dir(cfg, { depth: null, color: true });
export { cfg, app };

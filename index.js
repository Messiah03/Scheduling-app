import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from "url";
import compression from "compression";
import Todo from "./services/scheduling/todo/models/todoModel.js";
import { mongoose } from "mongoose";

const mongo_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Schedule"
mongoose.connect(mongo_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
app.disable("x-powered-by");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + path.sep;
console.log(__dirname);
const cfg = {
	port: 3000,
	dir: {
		root: __dirname,
		todo: __dirname + "services" + "/scheduling" + "/todo",
		views: __dirname + "services" + "/scheduling" + "/todo" + "/views",
		controller:
			__dirname + "services" + "/scheduling" + "/todo" + "/controllers",
		assets: {
			icons: __dirname + "assets" +'/icons',
			fonts: __dirname + 'assets' + '/font_icons' +'/ms-sans-serif-1',
		},
	},
};
console.log(cfg.dir.root.path);
app.use(compression());
app.use(express.json());

app.use(express.static(cfg.dir.todo));
app.use(express.static(cfg.dir.assets.fonts));
app.use(express.static(cfg.dir.assets.icons));
app.use(express.static(cfg.dir.controller));
app.use(express.static(cfg.dir.views));
app.use(express.urlencoded({ extended: true }));

import todoRoutes from "./services/scheduling/todo/routes/todoRouter.js";
app.use('/', todoRoutes)



app.use((req, res) => {
	res.status(404).send("Not found");
});
app.listen(cfg.port, () => {
	console.log(`Listening!  on http://localhost:${cfg.port}/`);
});
console.dir(cfg, { depth: null, color: true });
export { cfg, app };

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001

app.use(express.static(path.join(__dirname, "..", "front_end")));

app.get("/", (req, resp) => {
	resp.sendFile(path.join(__dirname, "..", "front_end", "Todo.html"));
});

app.listen(PORT, () => {
	console.log(`Listening! (port ${PORT})`);
});

const express = require("express");
const { json } = require("express");
const db = require("./models");
const cors = require("cors");

const entries = require('./route/entries')

const app = express();
const PORT = 8080;
const RESET = false;

app.use(cors());
app.use(json());

app.use("/api/v1/echo", (req, res) => {
    res.json({ message: "echo Back" });
});

app.use('/api/v1/entries', entries)

app.use((req, res) => {
    res.status(404).json({ message: "Path not found" });
});

db.sequelize.sync({ force: RESET, alert: true }).then(async () => {
    app.listen(PORT, () => {
        console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });
});
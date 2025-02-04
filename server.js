import express from "express";
import config from "./config";
import morgan from "morgan";
// TODO: import router from routes/
import apiRouter from "./routes/index";
const app = express();

app.use(express.json());

app.use(morgan("dev"));

// TODO: use the imported router to handle all requests
app.use("/api", apiRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});
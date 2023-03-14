import express from "express";
import morgan from "morgan";
import globalRouter from "../src/routers/globalRouter";
import videoRouter from "../src/routers/videoRouter";
import userRouter from "../src/routers/userRouter";

//create express application
const app = express();
const PORT = 4000;
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleServer = () =>
	console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleServer);

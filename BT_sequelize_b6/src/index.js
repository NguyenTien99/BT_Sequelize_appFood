const express = require("express");
const { handleErrors, AppError } = require("./helpers/error");



const app = express();
app.use(express.json());

const v1 = require("./routers/v1");
app.use("/api/v1", v1);


// app.get("/error", (req, res) => {
//     throw new AppError(500, "Internal server")
// })

app.use(handleErrors);

app.listen(4000);
require("dotenv").config();
const express = require("express");
const routes = require("./routes").router;

const app = express();
const port = process.env.PORT ?? 3000;

app.use("/", routes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
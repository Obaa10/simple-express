import express from "express";
import mongoose from "mongoose";

import router from "./router.js";

const app = express();

let url = "mongodb://127.0.0.1:27017/note_db"
mongoose.connect(url)
    .then(() => console.log("DB connection went successful!"));


app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

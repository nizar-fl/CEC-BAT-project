const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/connectDB")
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/worker",require("./routes/workers"))
app.use("/account",require("./routes/accounts"))
app.use("/constructionsite",require("./routes/constructionsSite"))

app.listen(PORT, ()=> {
    console.log("the server is running on port:",PORT)
})

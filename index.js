require("dotenv").config();

const express = require("express");
const router = require("./routes/route");
const connectDB = require("./db/connect");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Router
app.use("/", router);


//Start Web App
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT, ()=>{
            console.log(`Server is listening at port ${PORT}...`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("moongodb://127.0.0.1:27017//classDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//define the schema and model
const NameScheme = new mongoose.Schema({name: String });
const Name = mongoose.model("Name",NameSchema);

app.post("/add",async(req,res)=>{
    const { name } = req.body;
    if (!name) return res.status(400)
})
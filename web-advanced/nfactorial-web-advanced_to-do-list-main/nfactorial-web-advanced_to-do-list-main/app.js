const todo = require("./model/todo");

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true, 
    useUnifiedTopology: true  
    },).then(() => 
        app.listen(3000, () => console.log("Running...")))
        .catch((err) => { 
        console.error(err); 
    }); 
    

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    todo.find().then((data) => {
        res.render("index.ejs", { todo: data });
    })
});

app.post('/', async (req, res) => {
    const task = new todo({
        content: req.body.content
    });
    try {
        await task.save();
        res.redirect("/");
        console.log('Saved')
    } catch (err) {
        res.redirect("/");
        console.log(err)
    }
});


app.route("/delete/:content").get((req, res) => {
    const content = req.params.content;
    todo.findOneAndDelete(content).then(() => {
        res.redirect("/");
        console.log('deleted')
    })
});
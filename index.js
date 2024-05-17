import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , (req, res)=>{
    res.sendStatus(200)
})
app.post("/login" , (req , res)=>{
    res.sendStatus(201)
});

app.post("/signin" , (req , res)=>{
    console.log(req.body);
    res.sendStatus(201);
})
app.put("/operation" , (req , res)=>{
    res.sendStatus(200)
})
app.patch("/patch" , (req, res)=>{
    res.sendStatus(200)
})
app.delete("/delete" , (req,res)=>{
    res.sendStatus(200)
})


app.listen(port , ()=>{
    console.log(`server is running in port ${port}`);
});
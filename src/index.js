const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const {register,login}=require("./controllers/auth.controller");

const app = express();

app.use(express.json());

app.use("/users",userController);

app.post("/register", register)

app.post("/login",login);

app.use("/products",productController);




app.listen(5500, async()=>{
    try{
        await connect();
        console.log("listing port on 5500");
    }catch(err){
        console.log(err.message);
    }
});

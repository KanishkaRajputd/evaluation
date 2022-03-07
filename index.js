
// const express = require("assert");
const express=require("express");
const app=express();
let port=5015;

app.use(logger);
app.use(checkPermission);
app.get("/books",(req,res)=>{
 return res.send({route:"/books"})

});

app.get("/libraries",(req,res)=>{
   
    return res.send({route:"/libraries",permission:req.p})
   
   });
   
app.get("/authors",(req,res)=>{
   
    return res.send({route:"/authors",permission:req.p});
   
   });



   function logger(req,res,next){
if(req.path=="/books"||req.path=="/authors"||req.path=="/libraries"){
next();
   }
   else{
       res.send("Wrong Track Bro");
   }
   
   }


function checkPermission(req,res,next){

 if(req.path==="/libraries")
{

req.p=true;
}
if(req.path==="/authors")
{

req.p=true;
}
else{
    res.send("Path not found");
    
}
next();
}


app.listen(port,()=>{
console.log(`i am porting ${port}`);
})
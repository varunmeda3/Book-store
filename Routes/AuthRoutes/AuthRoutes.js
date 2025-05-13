 const express= require('express');
const userRouter=express.Router();
const bcrypt = require('bcrypt');
const {checkRegisterEmail,createUser,userLogin} =require('../../Controller/AuthController/AuthController')
const salt = 10;
// register user route
userRouter.post("/register",async (req,res)=>{
     const {email,name,password}=req.body;
if(!email||!password||!name){
    return res.status(400).send({message:"missing email,name,password"})
}
  
 try{
    //  check useremail is registered or not
      const check=await checkRegisterEmail(email);  
      console.log(check)
       if(!check){
        return res.status(400).send({message:"User Already registered!"})
       }
    //   hash password 
    const hash = bcrypt.hashSync(password, salt);
    
    //  create a new user
    const newUser=await createUser(name,email,hash);
    if(!newUser) {
        return res.status(400).send({message:"user Creation failed"})
    }
    return res.status(200).send({message:"user created successfully",newUser})

 }catch(e){
    console.log(e)
    return res.status(400).send({message:e});
 }

   
})

// login Route
userRouter.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   if(!email||!password){
    return res.status(400).send({message:"email,password is required"});
   }

   try{
         const status=await userLogin(email,password);

          const {message,token}=status;
           
          if(!token){
            return res.status(400).send({message })
          }
          
          return res.status(200).send({message,token});

   }catch(e){
        console.log(e)
   }

})

// change password

userRouter.put("/users/:id/reset")

module.exports={
    userRouter
}

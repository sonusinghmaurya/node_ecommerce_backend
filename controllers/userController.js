const User=require("../models/user_model")

const createuser=async (req,res)=>{
    const email=req.body.email
    const finduser=await User.findOne("email")
    if(!finduser){
        //create a new user
        const newUser=User.create(req.body)
        res.json(newUser)
    }
    else{
        //user already exist
        res.json({
            msg:"user already Exists"
        })
    }
}
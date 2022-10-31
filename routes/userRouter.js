const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")

//add user
router.post("/add",async(req,res)=>{
let user= await Controller.userController.Add(req.body)
res.json(user)
})
 

router.get("/gets",async(req,res)=>{
    let user= await Controller.userController.gets(req,res) 
    res.json(user)

})
module.exports = router;
const express = require("express")
const mongoose = require('mongoose');
const multer = require("multer");
const chalk = require('chalk')
const jwt = require('jsonwebtoken')

const checkJWT = require("../middlewares/jwt_auth")


let router = express.Router();

let UserModel = require("../models/user");

const storage = multer.diskStorage({
   destination: function (req, file, callback) {
      callback(null, './public/user_imgs/');
   },
   filename: function (req, file, callback) {
      callback(null, new Date().toISOString() + file.originalname);
   }
});

const upload = multer({
   storage: storage
});


router.post('/', async function (req, res) {
   console.log(req.body);
    

    try {
        const newUser = new UserModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password,
            email:req.body.email,
            });
        const user = await newUser.save();
        res.status(201).json(user);
     } catch (error) {
        console.log(error);
        res.sendStatus(409);
     }

});

router.patch("/admin",async(req,res)=>{
   try {
      let results = await UserModel.find({email:req.body.email}).exec()
      if (results.length>0) {
         if (!results[0].isAdmin) {
            results[0].isAdmin=true
            const user = await results[0].save();
            res.json(user);

         } else {
            res.json("Already admin")
         }
      }else{
         res.json(404,"email not found")
      }
      
   } catch (error) {
      console.log(error);
        res.json(409,error);
   }
})

router.use(checkJWT)



router.get('/', async(req,res)=>{
   

   try {
      let results = ""
      if(req.header("JWT")!==null){
         results = await UserModel.find({token:req.header("JWT")}).exec()
      }else{
         results = await UserModel.find({}).exec()
      }
      res.json(results)
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }
})

// router.get('/:id', async (req, res) => {

//     try {
//         let id = req.params.id;
//         let results = await UserModel.findById(id).exec();
//         res.json(results);
//      } catch (error) {
//         console.log(error);
//         res.send(404, {
//            error
//         })
//      }
  
// });


router.delete('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let results = await UserModel.findByIdAndDelete(id).exec()
        res.json(results)
     } catch (error) {
        console.log(error);
        res.send(404, {
           error
        })
     }

});

router.patch('/:id',upload.single('coverImage') ,async(req, res) => {
    try {
        let id = req.params.id;
        console.log(req.body);
        
        let results = await UserModel.findByIdAndUpdate(id,req.body,{new:true}).exec()
        res.json(results)
     } catch (error) {
        console.log(error);
        res.send(404, {
           error
        })
     }
});

module.exports = router;

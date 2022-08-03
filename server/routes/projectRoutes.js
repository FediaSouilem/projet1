const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { addProject, getProject, updateProject, deleteProject } = require('../controllers/projectControllers');
const router = express.Router ();


const multer = require('multer');
const path = require ('path');
const projectModel = require('../models/projectModel');

// Multer Configuration
const Storage = multer.diskStorage({
    destination: "uploads" ,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: Storage
}).single('testImage')


   
//     filename: (req, file, cb) => {
//         const fileName = `${Date.now()}_${file.originalname}`
//         cb(null, fileName)
//     }
// })

// const upload = multer({storage})

// router.post('/upload',upload.single('project'),(req,res)=>{
//     console.log(req.file)
//     const path= `http://localhost:5000/upload/${req.file.filename}`
//     res.json(path)
// })

router.post('/upload', (req,res)=>{
    console.log(req.file)
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else {
            const newProject = projectModel({
                name: req.body.name,
                image:{
                    data: req.file.filename,
                    contentType:'image/png'
                }
            })
            newProject.save()
            .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
// router.post('/', addProject);
router.get('/', getProject);
router.put('/:projectId', updateProject);
router.delete('/:projectId', deleteProject);
module.exports = router;

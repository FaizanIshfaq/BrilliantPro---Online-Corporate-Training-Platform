let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let studentSchema = require('../models/Student')

// CREATE Student
router.route('/create-student').post((req,res,next) =>
{
  studentSchema.create(req.body,(error,data) =>
  {
    if (error)
    {
      return next(error)
    } else
    {
      console.log(data)
      res.json(data)
    }
  })
})

// get Student by id
router.route('/get-students/').get(async (req,res) =>
{
  const studentIds = req.body;
  console.log("studentIds: ",studentIds)
  try
  {
    // // find student for every id in the array
    // const students = await studentSchema.find({
    //   '_id': { $in: studentIds }
    // });
    // console.log("students: ",students)
    res.status(200).json("Hello");
  }
  catch (error)
  {
    console.log("Error",error);
    res.status(500).send("Server Error Occured")
  }
});


// READ Students

router.route('/').get((req,res) =>
{
  studentSchema.find((error,data) =>
  {
    if (error)
    {
      return next(error)
    } else
    {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-student/:id').get((req,res) =>
{
  studentSchema.findById(req.params.id,(error,data) =>
  {
    if (error)
    {
      return next(error)
    } else
    {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-student/:id').put((req,res,next) =>
{
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error,data) =>
    {
      if (error)
      {
        return next(error)
        console.log(error)
      } else
      {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-student/:id').delete((req,res,next) =>
{
  studentSchema.findByIdAndRemove(req.params.id,(error,data) =>
  {
    if (error)
    {
      return next(error)
    } else
    {
      res.status(200).json({
        msg: data,
      })
    }
  })
})


router.post('/login',async (req,res) =>
{
  console.log("req.body: ",req.body)
  try
  {
    const { email,password } = req.body;
    if (!email || !password)
    {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    // find admin with email 
    const studentSchema = await studentSchema.findOne({ email });
    if (!studentSchema)
    {
      return res.status(400).json({ msg: 'Student does not exist' });
    }
    // check if the password is correct
    if (password !== studentSchema.rollnumber)
    {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.status(200).json({ msg: 'Successful' });

  } catch (err)
  {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router

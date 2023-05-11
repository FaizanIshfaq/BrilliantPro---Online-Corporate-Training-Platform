const express = require('express');
const router = express.Router();
const Admin = require('../Models/Admin');

// Admin registration route
router.post('/register',async (req,res) =>
{
  try
  {
    const { email,password } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin)
    {
      return res.status(400).json({ msg: 'Admin already exists' });
    }

    // Create new admin
    const newAdmin = new Admin({ email,password });
    await newAdmin.save();
    res.status(201).json({ msg: 'Admin created successfully' });
  } catch (err)
  {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// create route for login which will check if the email and password are corrent it will return 200 status and Successful msg else it will return 404 status
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
    const admin = await Admin.findOne({ email });
    if (!admin)
    {
      return res.status(400).json({ msg: 'Admin does not exist' });
    }
    // check if the password is correct
    if (password !== admin.password)
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
module.exports = router;

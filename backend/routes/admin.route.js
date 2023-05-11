const express = require('express');
const router = express.Router();
const Admin = require('../Models/Admin');

// Admin registration route
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin already exists
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ msg: 'Admin already exists' });
    }

    // Create new admin
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    res.status(201).json({ msg: 'Admin created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

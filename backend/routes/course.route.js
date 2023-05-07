const mongoose = require('mongoose');
const Course = require('../Models/Course');
const express = require('express');
const router = express.Router();

// CREATE Course
router.route('/create-course').post((req, res, next) => {
  Course.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Courses
router.route('/').get((req, res, next) => {
  Course.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Course
router.route('/edit-course/:id').get((req, res, next) => {
  Course.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Course
router.route('/update-course/:id').put((req, res, next) => {
  Course.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log('Course updated successfully !');
      }
    }
  );
});

// Delete Course
router.route('/delete-course/:id').delete((req, res, next) => {
  Course.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;

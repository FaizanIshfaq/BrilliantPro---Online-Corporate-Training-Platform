const mongoose = require('mongoose');
const Assessment = require('../Models/Assessment');

const express = require('express');
const router = express.Router();

// CREATE Assessment
router.route('/create-assessment').post((req, res, next) => {
  Assessment.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Assessments
router.route('/').get((req, res, next) => {
  Assessment.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Assessment
router.route('/:id').get((req, res, next) => {
  Assessment.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Assessment
router.route('/update-assessment/:id').put((req, res, next) => {
  Assessment.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log('Assessment updated successfully !');
      }
    }
  );
});

// Delete Assessment
router.route('/delete-assessment/:id').delete((req, res, next) => {
  Assessment.findByIdAndRemove(req.params.id, (error, data) => {
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

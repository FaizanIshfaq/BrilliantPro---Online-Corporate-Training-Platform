const mongoose = require('mongoose');
const Material = require('../Models/Material');

const express = require('express');
const router = express.Router();

// CREATE Material
router.route('/create-material').post((req,res,next) =>
{
  Material.create(req.body,(error,data) =>
  {
    if (error)
    {
      return next(error);
    } else
    {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Materials
router.route('/').get((req,res,next) =>
{
  Material.find((error,data) =>
  {
    if (error)
    {
      return next(error);
    } else
    {
      res.json(data);
    }
  });
});

// Get Single Material
router.route('/:id').get((req,res,next) =>
{

  Material.findById(req.params.id,(error,data) =>
  {
    if (error)
    {
      return next(error);
    } else
    {
      res.json(data);
    }
  });
});

// Update Material
router.route('/update-material/:id').put((req,res,next) =>
{
  Material.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error,data) =>
    {
      if (error)
      {
        return next(error);
      } else
      {
        res.json(data);

        console.log('Material updated successfully !');
      }
    }
  );
});

// Delete Material
router.route('/delete-material/:id').delete((req,res,next) =>
{
  Material.findByIdAndRemove(req.params.id,(error,data) =>
  {
    if (error)
    {
      return next(error);
    } else
    {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;

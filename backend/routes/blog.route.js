let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Blog Model
let blogSchema = require('../Models/Blog.js')

// CREATE Blog
router.route('/create-blog').post((req, res, next) => {
  blogSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Blogs
router.get('/', function(req, res, next) {
      
  blogSchema.find().then((data, error) => {
      if (error) {
        console.log('Failed to retrieve the Blog List: ' + error);
      } 
      else {
        res.json(data) 
      }
  });

});

// Get Single Blog
router.route('/display-blog/:id').get((req, res, next) => {
  blogSchema.findById(req.params.id).then((data, error) => {
    if (error) {
      console.log('Failed to retrieve the Blog: ' + error);
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-blog/:id').put((req, res, next) => {
  blogSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-blog/:id').delete((req, res, next) => {
  blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router

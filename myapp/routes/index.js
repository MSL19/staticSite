var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
res.render('index')
});
/*router.get('/login', function(req, res, next) {
  //  res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public/pages/', 'login.html'))
  });*/
router.get('/dashboard', function(req, res, next) {
    //  res.render('index', { title: 'Express' });
res.render('dashboard')  
  });

router.get('/contact', function(req, res, next) {
     //  res.render('index', { title: 'Express' });
     res.render('contact')  
    });

router.get('/about', function(req, res, next) {
      //  res.render('index', { title: 'Express' });
      res.render('about')  
    });
   

module.exports = router;

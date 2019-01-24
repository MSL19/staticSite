var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
res.sendFile(path.join(__dirname, '../', 'index.html'))
});
router.get('/login', function(req, res, next) {
  //  res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../pages', 'login.html'))
  });
router.get('/dashboard', function(req, res, next) {
    //  res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../pages', 'dashboard.html'))
    });

router.get('/contact', function(req, res, next) {
     //  res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../pages', 'contact.html'))
    });

router.get('/about', function(req, res, next) {
      //  res.render('index', { title: 'Express' });
     res.sendFile(path.join(__dirname, '../', 'about.html'))
     });
   

module.exports = router;

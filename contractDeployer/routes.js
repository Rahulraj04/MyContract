// const service = require("./impl");
var path = require('path');

module.exports = function(app,express){



    // app.get('/deployer', function(req, res) {
    //     res.render('');
    //   });

    app.use(express.static(path.join(__dirname, './dist')));

    app.get('/deployer',hasPackage1,function (req, res) {
      console.log("log",req.session.byteCode,req.session.user);
    res.sendFile(path.join(__dirname, './','dist', 'index.html'),{user: req.session.user,byteCode:req.session.byteCode});
});


}

// route middleware to check package 1
function hasPackage1(req, res, next) {
    if(req.user.packages.package_2==true){
      return next();
    }else{
      res.redirect('/profile');
    }
  }
// const config = require('../config')
// const express = require('express')
// const path = require('path')
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var logger = require('morgan');
// var ejs = require('ejs');
// var index = require('../server');
//
//
// const app = express()
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
//
// app.set('views', path.join(path.resolve(process.cwd(), '.'), 'dist'));
// app.set('view engine', 'html');
// app.engine('html', ejs.__express);
//
// const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
// app.use(staticPath, express.static('./dist'))
//
//
// // app.use('/', index);
// var router = require('../server');
// router(app)
//
//
//
// module.exports = app.listen(config.build.port,function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Listing ' + config.build.port)
// });


const config = require('../config')
const express = require('express')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');


const app = express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./dist'))

var router = require('../server');
router(app)

module.exports = app.listen('9000')

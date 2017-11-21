const axios = require('axios')
const express = require('express')
const apiRoutes = express.Router()
const config = require('../config')


module.exports = function (app) {
  let baseUrl = config.dev.baseUrl
  if (process.env.NODE_ENV !== 'development'){
    baseUrl = config.build.baseUrl
  }

  apiRoutes.post('/login', function (req, res) {
    console.log(req.body);
    var url = baseUrl + '/users/login'
    axios.post(url).then((response) => {
      var ret = response.data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({.+})\)$/
        var matches = ret.match(reg)
        if (matches) {
          ret = JSON.parse(matches[1])
        }
      }
      res.json(ret)
    }).catch((e) => {
      console.log(e)
    })

    // return res.send({data:200,data:{name:'macj'}});
  });
  app.use('/api', apiRoutes)
};

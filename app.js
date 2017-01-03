 
 'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g')
var config = {
    wechat: {
        appID: 'wx3f7b930491c50c04'，
        appSecret: '9f289594669317f30d331bf097bc78e6',
        token: 'hello 2017'
    }
}

var app = new Koa()

app.use(wechat(config.wechat))
app.listen(1234)
console.log('Listening:1234')

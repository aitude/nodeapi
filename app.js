var express = require('express')
var app = express()
var port = process.env.PORT || 5000

// Test end Point
app.get('/',function(req,res){

res.send('Hello World! My app is ready to deploy.')

})

app.listen(port)
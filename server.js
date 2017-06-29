'use strict';

// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
// const conString = process.env.GITHUB_TOKEN;
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('/public/index.html',{root:'.'});
});

app.listen(PORT, function(){
  console.log(PORT);
});
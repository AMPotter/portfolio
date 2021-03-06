'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyGitHub( request, response ) {
  console.log( 'Routing GitHub request for', request.params[0] );
  ( requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.get('/', function(request, response){
  response.sendFile('/public/index.html',{root:'.'});
});

app.listen(PORT, function(){
  console.log(PORT);
});
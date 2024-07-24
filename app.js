// relative is a function that takes a string and that either is a relative path to one of the files
// http module allows us to create a server, it has create a server method which is you can call


const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//req is request and res is responed 
// request methods is a property which gives us the HTTP method which used for incoming request

//next is function which you call if you don't want to send the response in this middleware but instead forwaard the request to the next middleware in line.

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, nexxt) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

app.get( '/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});



//listen is a method that setup an event listener for such a incoming requests to listen and tou can pass a port number
app.listen(5000);

// if i changed the code i need to restart the server because when i run the file node.js it executes that file and if there 
// is change the code in there it doesn't automatically read execute it
// so manually we need to stop the server anf rerun it with node app.js

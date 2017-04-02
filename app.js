//import router from "./router";
//const http = require('http');

const express  = require('express');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port     = 3000;
const app      = express();
const events = require('./events/events.api');
//const events = require('./api_events');

/*const db = require('./db');
const url = 'mongodb://localhost:27017/api';

db.connect(url, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})*/

const  mongoose = require('./mongoose');
mongoose();



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)	=> {
	res.send('hello');
});

app.use('/events', events);


app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
})
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    usersCtrl = require('./controllers/UsersCtrl.js'),
    port = process.env.PORT || 9001,
    corsOptions = {
      origin: 'http://ntigo.herokuapp.com'
    },
    // mongoUri = 'mongodb://localhost:27017/ntigo'
    mongoUri = 'mongodb://zmckimmins:ntigo7!zach@ds013232.mlab.com:13232/heroku_ltlw2pgv';

app.use(cors(corsOptions), bodyParser.json(), express.static(__dirname + '/public'));

app.post('/api/users', usersCtrl.addUser);
app.get('/api/user', usersCtrl.getUser);
app.get('/api/user/shifts', usersCtrl.getUserShifts);
app.get('/api/user/:id', usersCtrl.getUserById);
app.get('/api/users', usersCtrl.getUsers);
app.put('/api/user/:id', usersCtrl.updateUser);
app.post('/api/user/:id/shift', usersCtrl.addShift);


mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ' + mongoUri);
});


app.listen(port, function() {
  console.log('Listening on ' + port);
});

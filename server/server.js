require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/',function(req, res){
  res.send('<h1>Equpipo 6-4D </h1>');
  res.send('<h1>RODRIGUEZ YLLESCAS KARLA MORIANA</h1>');
  res.send('<h1>MONTOYA LOPEZ  JOAN EMMANUEL  </h1>');
  res.send('<h1>GARCIA RESENDIZ OSCAR RENATO </h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/producto'));
app.use(require('./routes/login'));

 mongoose.connect('mongodb+srv://admin:3526@cluster0.4pvv9.mongodb.net/cafeteria',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
 },(err, res) => {
  if(err) throw err;
  console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, ( )=> {
  console.log('La aplicacion esta en linea por el puerto', process.env.PORT)
});
const express = require('express');
const mongodb = require('./data/database');

const app = express();
// const session = require('express-session');
// const bodyParser = require('body-parser');
const port = 3000;

app.use('/', require('./routes'));
app.use('/', require('./routes/users'));

mongodb.initDb((err) =>{
  if(err){
    console.log(err);
  }else{
    app.listen(process.env.PORT || port, () => {
      console.log('Database and Node is listening at port ' + (process.env.PORT || 3000));
    });
  }
})
//app.use(bodyParser.json());



const express = require('express');
const mongodb = require('./data/database');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res. setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));
app.use('/', require('./routes/staff'));
app.use('/', require('./routes/users'));

app.use('/', require('./routes/temples'));
app.use('/', require('./routes/indexswag'));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongodb.initDb((err) =>{
  if(err){
    console.log(err);
  }else{
    app.listen(process.env.PORT || port, () => {
      console.log('Database and Node is listening at port ' + (process.env.PORT || 3000));
    });
  }
})




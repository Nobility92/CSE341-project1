const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;
app.use('/', require('./routes'));
app.use(bodyParser.json());


app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send("Henry Hello");
});
app.use(bodyParser.json());
app.use('/', router);

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
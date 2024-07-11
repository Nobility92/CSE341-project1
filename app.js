const express = require('express');
const mongodb = require('./data/database');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const githubstrategy = require('passport-github2').Strategy;
const cors = require('cors');
const port = 3000;

app.use(bodyParser.json());
app.use(session({
  secret:"secret",
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res. setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(cors({methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}))
app.use(cors({origin: '*'}))
app.use('/', require('./routes/staff'));


//app.use('/', require('./routes'));
app.use('/', require('./routes/users'));

app.use('/', require('./routes/temples'));
app.use('/', require('./routes/indexswag'));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

passport.use(new githubstrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
  
},
  function(accessToken, refreshToken, profile, done){
    return done (null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) =>{
  done(null, user);
});

app.get('/', (req, res) => {
  res.send(req.session.user !== undefined? `Logged In as ${req.session.user.displayName}` : `Logged Out`)
});

app.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/staff', session: false}),
(req, res) => {
  req.session.user = req.user;
  res.redirect('/');
});

mongodb.initDb((err) =>{
  if(err){
    console.log(err);
  }else{
    app.listen(process.env.PORT || port, () => {
      console.log('Database and Node is listening at port ' + (process.env.PORT || 3000));
    });
  }
})




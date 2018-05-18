const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const controller = require('./controller');

const {
//     SERVER_PORT,
//     SESSION_SECRET,
//     DOMAIN,
//     CLIENT_ID,
//     CLIENT_SECRET,
//     CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express();

app.use( bodyParser.json());

massive(CONNECTION_STRING).then((dbInstance) => {
    console.log('Database Connected');
    // dbInstance.seed_tables().then( ( tableRetrieve) => {  
        // console.log('table seeded');
        // console.log('table seeded', tableRetrieve);
    // }).catch( () => console.log('Failed to seed'));
    app.set('db', dbInstance);
})


app.use(express.static(__dirname + './../build'));

app.get('/api/startup', controller.initializeTable);
app.post('/api/login', controller.loginUser);
app.post('/api/register', controller.registerNewUser);

app.get('/api/posts/all', controller.getPostsTable);

const port = 4000;
app.listen(port, () => { console.log(`Succeeding, Winning, Port: ${port}`) });



// Order in important
// session

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

//must come after session

// app.use(passport.initialize());

//must come after initialize middleware

// app.use(passport.session());
// passport.use(new Auth0Strategy({
//     domain: DOMAIN,
//     clientID: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     callbackURL: CALLBACK_URL,
//     scope: 'openid profile'
// }, (accessToken, refreshToken, extraParams, profile, done) => {
//     let db = app.get('db');
//     let { displayName, picture, id } = profile;

//     db.find_user([id]).then((foundUser) => {
//         if (foundUser[0]) {
//             done(null, foundUser[0].id);
//         } else {
//             db.create_user([displayName, picture, id]).then((user) => {
//                 done(null, user[0].id);
//             })
//         }
//     })
// }
// ));

// passport.serializeUser((id, done) => {
//     done(null, id);
// });

// passport.deserializeUser((id, done) => {
//     // whatever we pass out, ends up on req object as req.user
//     app.get('db').find_session_user([id]).then( (user) => {
//         done( null, user[0]);
//     })
// });

// app.get('/login', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3005/#/private'// initial build redirect before run build 'http://localhost:3000/#/private'
// }))
// app.get('/auth/me', (req, res) => {
//     if( req.user ){
//         res.status(200).send(req.user);
//     } else {
//         res.status(401).send('Nice try suckkkkkkkkaaaaaaa');
//     }

// })
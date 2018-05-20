function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let numInc = getRandomInt(100);

module.exports = {
    initializeTable: (req, res, next) => {
        const db = req.app.get('db');
        db.get_helouser_table().then( (table) =>{
            res.status(200).send( table );
        }).catch( err => console.log('Failed to initialize'))
    },
    loginUser: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        // console.log('req.body:', req.body, 'req.params:', req.params, 'req.app:', req.app);
        db.get_user_login([username, password])
        .then( (results) => {
            // console.log( results );
            res.status(200).send( results );
        }).catch( err => {
            console.log(`Failed to retrieve login`);
            res.status(401).send( console.log('This was forbidden', err) );
        })

    },
    registerNewUser: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        const userPic = `https://robohash.org/${numInc}`
        db.create_new_user([username, password, userPic])
        .then( (results) => {
            req.session.userid = results[0].id;
            console.log( results );
            console.log( req.session.userid);
            res.status(200).send( results );
        }).catch( err => {
            // console.log(`Failed to register`);
            res.status(401).send( 'This was forbidden', err );
        })
    },


    getPostsTable: (req, res, next ) => {
        const db = req.app.get('db');
        db.get_all_posts().then( result => {
            res.status(200).send( result );
        }).catch( err => {
            res.status(500).send(
            console.log(err))})
    },
    getPostById: (req, res, next ) => {
        const db = req.app.get('db');
        console.log(req.params);
        db.get_post_by_post_id([req.params.id]).then( (databack) => {
            res.status(200).send(databack);
        }).catch( err => console.log('oops'))
    },
    createNewPost: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.params);
        console.log(req.body);
        const { title, img, content, author_id } = req.body;
        db.create_new_post([title, img, content, author_id]).then( (succ) => {
            res.status(200).send('Post Successful');
        }).catch( err => console.log(`Unable to post on server ${err}`))
    }
}
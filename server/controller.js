let numInc = 10;

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

        db.create_new_user([username, password, numInc++])
        .then( (results) => {
            // console.log( results );
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
    }

}
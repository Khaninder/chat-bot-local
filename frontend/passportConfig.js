const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("./dbConfig");

function initialize(passport) {
    console.log("Initialized");

    const authenticateUser = (firstname, uid, done) => {
        console.log(uid);
        let queryText = `SELECT * FROM users WHERE uid = $1`
        pool.query(queryText, [uid], (err, results) => {
            if (err) {
                throw err;
            }
            console.log(results.rows);

            if (results.rows.length > 0) {
                const user = results.rows[0];
                let queryText = `UPDATE users SET times_logged = $1 WHERE uid = $2`
                pool.query(queryText, [user.times_logged + 1, user.uid]);
                return done(null, user);
            } else {
                return done(null, false, {
                    message: "No user with that U-number. Please register."
                });
            }
        });
    };

    passport.use(
        new LocalStrategy({ usernameField: "uid", passwordField: "uid" },
            authenticateUser
        )
    );
    passport.serializeUser((user, done) => done(null, user.uid));

    passport.deserializeUser((uid, done) => {
        let queryText = `SELECT * FROM users WHERE uid = $1`
        pool.query(queryText, [uid], (err, results) => {
            if (err) {
                return done(err);
            }
            // console.log(`ID is ${results.rows[0].uid}`);
            return done(null, results.rows[0]);
        });
    });
}

module.exports = initialize;
const express = require("express");
const { pool } = require("./dbConfig");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const app = express();
var path = require('path')
app.use(express.static(path.join(__dirname, 'static')));

const PORT = process.env.PORT || 3000;

const initializePassport = require("./passportConfig");

initializePassport(passport);

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.get("/users/register", checkAuthenticated, (req, res) => {
    res.render("consent.ejs");
});

app.get("/users/login", checkAuthenticated, (req, res) => {
    // console.log(req.session.flash.error);
    res.render("login.ejs");
});

app.get("/panas", checkNotAuthenticated, (req, res) => {
    res.render("panas", { user: req.user.first_name });
});

app.post("/panas-score", (req, res) => {
    var panasScore = req.body.score;
    let queryText = `INSERT INTO scores (first_name, last_name, uid, panas_score) VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.user.first_name, req.user.last_name, req.user.uid, panasScore], (err, res) => {
        console.log(err, res)
    });
});

app.get("/chatbot", checkNotAuthenticated, (req, res) => {
    res.render('chatbot.ejs', { user: req.user.first_name });
});

app.get("/users/logout", (req, res) => {
    req.logout();
    res.render("login.ejs", { message: "You have logged out successfully" });
});

app.post("/users/register", (req, res) => {
    var { firstname, lastname, uid } = req.body;

    let errors = [];

    if (!firstname || !lastname || !uid) {
        errors.push({ message: "Please enter all fields" });
    }

    if (uid && uid.length == 8) {
        for (var i = 0; i < uid.length; i++) {
            if (uid.charCodeAt(i) >= 48 && uid.charCodeAt(i) <= 57) {
                isUidValid = true
            } else {
                isUidValid = false;
            }
        }
    } else {
        isUidValid = false;
    }

    if (!isUidValid) {
        errors.push({ message: "Enter a valid U-number" });
    }

    if (errors.length > 0) {
        res.render("consent.ejs", { errors, firstname, lastname, uid });
    } else {
        let queryText = `SELECT * FROM users WHERE uid = $1`
        pool.query(queryText, [uid], (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(results.rows);

            if (results.rows.length > 0) {
                errors.push({ message: "U-number already registered, please log in" });
                return res.render("login.ejs", { errors });
            } else {
                let queryText = `INSERT INTO users (first_name, last_name, uid, times_logged) VALUES ($1, $2, $3, 0) RETURNING uid`
                pool.query(queryText, [firstname, lastname, uid], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log(results.rows);
                    req.flash("success_msg", "You are now registered. Please log in");
                    res.redirect("/users/login");
                });
            }
        });
    }
});

app.post(
    "/users/login",
    passport.authenticate("local", {
        successRedirect: "/panas",
        failureRedirect: "/users/login",
        failureFlash: true
    })
);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/panas");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/users/login");
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
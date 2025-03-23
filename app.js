if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Club = require("./models/Club.js");
const methodOverride = require ("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const {clubSchema, registerSchema} = require("./schema.js");
const Register = require ("./models/register.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");

const clubRouter = require("./routes/club.js");
const registerRouter = require("./routes/register.js");
const userRouter = require("./routes/user.js");
const { connect } = require("http2");

const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log("error saving home data",err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

// app.get("/",(req,res)=>{
//     res.send("Hi, I am root.");
// });

app.listen(8080,()=>{
    console.log("server working on port 8080");
});

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public"))); //to serve the static file taht we will use for styling inside the public folder

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("Error in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookies: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async(req,res)=>{
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student"
//     });
//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

app.use("/club",clubRouter);
app.use("/club/:id/register",registerRouter);
app.use("/", userRouter);

app.get("/home",wrapAsync(async(req,res)=>{
    res.render("clubs/home.ejs");
}));


// app.get("/testHome",async(req,res)=>{
//     let sampleHome = new Home({
//         title:"Cultural Club",
//         description:"explore the best",
//         location:"F-Block",
//         head:"Dr. Latika Jindal",
//     });

//     await sampleHome.save();
//     console.log("sample was saved");
//     res.send("successfull testing");
// });

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err,req,res,next)=>{
    let {statusCode = 500, message="Something went Wrong!"} = err;
    res.status(statusCode).render("clubs/error.ejs", {err});
    //res.status(statusCode).send(message);
});

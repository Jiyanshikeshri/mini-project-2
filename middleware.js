const Club = require("./models/Club.js");
const Register = require("./models/register.js");
const ExpressError = require("./utils/ExpressError.js");
const {clubSchema, registerSchema} = require("./schema.js");

module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        //redirect url
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create club!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req,res,next) =>{
    let {id} = req.params;
    let club = await Club.findById(id);
    if(!club.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this Club.");
        return res.redirect(`/club/${id}`);
    }
    next();
};

module.exports.validateClub = (req,res,next)=>{
    let {error} = clubSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

module.exports.validateRegister = (req,res,next)=>{
    let {error} = registerSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

module.exports.isRegisterAuthor = async(req,res,next) =>{
    let {id,registerId} = req.params;
    let register = await Register.findById(registerId);
    if(!register.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this registration.");
        return res.redirect(`/club/${id}`);
    }
    next();
};
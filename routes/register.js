const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Club = require("../models/club.js");
const Register = require ("../models/register.js");
const {validateRegister, isLoggedIn, isRegisterAuthor} = require("../middleware.js");

const registerController = require("../controllers/register.js");

//Register route = refister post route
router.post("/", isLoggedIn, validateRegister, wrapAsync(registerController.createRegister));

//delete route for delete the registrations
router.delete("/:registerId",isLoggedIn, isRegisterAuthor, wrapAsync(registerController.destroyRegister));

module.exports = router;

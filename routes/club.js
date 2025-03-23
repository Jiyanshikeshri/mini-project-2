const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Club = require("../models/club.js");
const {isLoggedIn, isOwner, validateClub} = require("../middleware.js");
const clubController = require("../controllers/club.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//combination of step1. index route and step4. create route using router.route because both had the same route i.e, "/"
router.route("/")
    .get(wrapAsync(clubController.index))
    .post(isLoggedIn,upload.single("club[image]"), validateClub,
    wrapAsync(clubController.createClub)
);
    

// step3. new route= for creating new club (isko upar isliye rakha step 2 k kyunki vo /new ko id samajh rha tha isliye)
router.get("/new", isLoggedIn, clubController.renderNewForm);

//step9. about page/route
router.get("/event",wrapAsync(clubController.about));

//combination of step2 show route, step6 update route and step7 delete route as all these have the same common route i.e, "/:id"
router.route("/:id")
.get(wrapAsync(clubController.showClub))
.put(isLoggedIn, isOwner,upload.single("club[image]"),validateClub, wrapAsync(clubController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(clubController.destroyListing));

// step 1. index route = for showing all the club
// router.get("/", wrapAsync(clubController.index));

// step 2. show route = for showing specific club
// router.get("/:id", wrapAsync(clubController.showClub));

//step 4. create route (matlab jo hum naya club create kr rhe hai usko add button click krne k baad vo kaha redirect hoga)
// router.post("/",isLoggedIn, validateClub, wrapAsync(clubController.createClub));


//step5 edit route to edit the club details
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(clubController.renderEditForm));

//step6 update route jo route hmne edit hua hai usko db mein save aur update karna
// router.put("/:id",isLoggedIn, isOwner, validateClub, wrapAsync(clubController.updateListing));

//step 7. delete route
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(clubController.destroyListing));

module.exports = router;
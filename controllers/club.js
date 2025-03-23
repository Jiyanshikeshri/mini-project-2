const Club = require("../models/Club");

module.exports.index = async(req,res)=>{
    const allClubs = await Club.find({});
    // console.log(allClubs);
    res.render("clubs/index.ejs", {allClubs});
};

module.exports.renderNewForm =async(req,res)=>{
    res.render("clubs/new.ejs");
};

module.exports.about = async(req,res)=>{
    res.render("clubs/event.ejs");
};

module.exports.showClub = async(req,res)=>{
    let {id} = req.params;
    const club = await Club.findById(id)
    .populate({
        path: "register",
        populate: {
            path: "author",
        },
}).populate("owner");
    if(!club){
        req.flash("error", "Club you requested for does not exist!");
        return res.redirect("/club");
    }
    console.log(club);
    res.render("clubs/show.ejs", {club});
};

module.exports.createClub = async(req, res, next)=>{
    //let{title,description,image, location, head} = req.body;
    //iss upar wali statement ki jagah hum ek aur cheex kar skate hai jo hai ki hum in sab ko ek object bana de new.ejs mein. eg. home[title]
    //const home = req.body.home;
    //ya hum yeh bhi likh skate hai
    let url = req.file.path;
    let filename = req.file.filename;

    const newclub = new Club(req.body.club);
    newclub.owner = req.user._id;
    newclub.image = {url, filename};
    await newclub.save();
    req.flash("success", "New Club Created!");
    res.redirect("/club");
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const club = await Club.findById(id);
    if(!club){
        req.flash("error", "Club you requested for does not exist!");
        res.redirect("/club");
    }
    let originalImageUrl = club.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250,h_250,c_fill");
    res.render("clubs/edit.ejs",{club, originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let club = await Club.findByIdAndUpdate(id, {...req.body.club});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        club.image = {url, filename};
        await club.save();
    }

    req.flash("success", "Club Updated!");
    res.redirect(`/club/${id}`);
};

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    let deletedClub = await Club.findByIdAndDelete(id);
    console.log(deletedClub);
    req.flash("success", "Club Deleted!");
    res.redirect("/club");
};
const Club = require("../models/club.js");
const Register = require("../models/register.js");

module.exports.createRegister = async(req,res)=>{
    let club = await Club.findById(req.params.id);
    let newRegister = new Register(req.body.register);
    newRegister.author = req.user._id;
    console.log(newRegister);
    club.register.push(newRegister);

    await newRegister.save();
    await club.save();

    res.redirect(`/club/${club._id}`);
};

module.exports.destroyRegister = async(req,res)=>{
    let {id, registerId} = req.params;

    await Club.findByIdAndUpdate(id, {$pull: {register: registerId}});
    await Register.findByIdAndDelete(registerId);

    res.redirect(`/club/${id}`);
};
const mongoose = require("mongoose");
const initData = require("./data.js");
const Club = require("../models/club.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/CollegeClubHub";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() =>{
    await Club.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "67d02f0773e2166bb793205e"}));
    await Club.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();

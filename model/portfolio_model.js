const mongoose= require("mongoose");
const portfolioModel=new mongoose.model("Projects",mongoose.Schema({
_id:String,
image:String,
title: String,
github: String,
demo: String,
}))

module.exports = {
  portfolioModel
}

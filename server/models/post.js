const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    user_id: String,
    text: String,
    background: String
})

module.exports = mongoose.model("post", PostSchema)
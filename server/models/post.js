const mongoose = require("mongoose")

const PostSchema = new Schema({
    user_id: String,
    text: String,
    background: String
})

module.exports = mongoose.model("post", PostSchema)
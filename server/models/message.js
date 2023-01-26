const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    user_id: String,
    text: String,
    background: String
})

module.exports = mongoose.model("Message", MessageSchema)
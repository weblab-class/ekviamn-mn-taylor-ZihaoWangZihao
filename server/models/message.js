const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    text: String,
    background: String
})

module.exports = mongoose.model("Message", MessageSchema)
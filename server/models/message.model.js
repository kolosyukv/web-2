const mongoose = require("mongoose")

const Message = mongoose.model("Message", new mongoose.Schema({
    text: String,
    ID: String,
}))

module.exports = Message;
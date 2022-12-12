const mongoose = require('mongoose');

const Artical = new mongoose.Schema({
    img: String,
    hashtag: { type: [String], require: true },
    title: String,
    description: String,
    content: String,
    sanitizedHTML: { type: String, require: true},
    time : { type : Date, default: Date.now },
    timeString: String
})

module.exports = mongoose.model('artical', Artical)
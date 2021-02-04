const { Schema, model } = require("mongoose")

const songSchema = new Schema (
    {
        name: String,
        artist: String,
        length: String
    }
)

const Song = model("song", songSchema)

module.exports = Song
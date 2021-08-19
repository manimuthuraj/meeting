const mongoose = require("mongoose");

const schedulingSchema = new mongoose.Schema({

    date:{
        type: Date,
        required: true
    },
    startTime:{
        type: String,
        required: true
    },
    endTime:{
        type: String,
        required: true
    },

    created_At: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("scheduling", schedulingSchema)
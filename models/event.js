const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Set name for event"],
        },
        description: {
            type: String,
        },
        date: {
            type: String,
            required: [true, "Set date for event"],
        },
        time: {
            type: String,
        },
        currentDate: {
            type: String,
        },
    },
    { versionKey: false, timestamps: true }
);

const Event = model("event", eventSchema);

module.exports = { Event };

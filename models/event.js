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
            year: { type: String, required: [true, "Set year for event"] },
            month: { type: String, required: [true, "Set month for event"] },
            day: { type: String, required: [true, "Set day for event"] },
        },
        time: {
            type: String,
        },
        currentDate: {
            type: String,
        },
        updated: {
            type: Boolean,
        },
    },
    { versionKey: false, timestamps: true }
);

const Event = model("event", eventSchema);

module.exports = { Event };

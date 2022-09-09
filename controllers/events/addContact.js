const { Event } = require("../../models/event");

const addContact = async (req, res, next) => {
    res.status(201).json(await Event.create(req.body));
};

module.exports = addContact;

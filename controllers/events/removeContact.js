const { Event } = require("../../models/event");
const RequestError = require("../../helpers/RequestError");

const removeContact = async (req, res, next) => {
    const { id } = req.params;
    const result = await Event.findByIdAndRemove(id);
    if (!result) {
        throw RequestError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
};

module.exports = removeContact;

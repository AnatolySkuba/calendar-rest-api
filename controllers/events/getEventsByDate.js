const { Event } = require("../../models");
const RequestError = require("../../helpers/RequestError");

const getEventsByDate = async (req, res, next) => {
    const { year, month } = req.params;
    const results = await Event.find({}, "-createdAt -updatedAt");
    // result.forEach((event) =>
    //     console.log(event.date.slice(0, 4), event.date.slice(5, 7), year, month)
    // );
    // const resultSelected = results.reduce((events, event) => {
    //     if (
    //         event.date.slice(5, 7) > "01" &&
    //         event.date.slice(5, 7) < "12" &&
    //         event.date.slice(0, 4) === year
    //     ) {
    //         events.push(event);
    //     }

    //     if (
    //         event.date.slice(5, 7) === "01" &&
    //         event.date.slice(0, 4) === year
    //     ) {
    //         results.forEach(
    //             (result) => Number(result.date.slice(0, 4)) - 1 === Number(year)
    //         );
    //         events.push(event);
    //     }
    //     return events;
    // }, []);
    // res.json({
    //     status: "success",
    //     code: 200,
    //     data: result,
    // });
    // console.log(result, year, month);

    // const { id } = req.params;
    // console.log(id);
    // const contact = await Event.findById(id, "-createdAt -updatedAt");
    // console.log(contact);
    // if (!contact) {
    //     throw RequestError(404, "Not found");
    // }
    res.json({ status: "success", code: 200, data: year });
};

module.exports = getEventsByDate;

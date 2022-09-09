const express = require("express");

const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.events.listEvents));

router.get("/:id", isValidId, ctrlWrapper(ctrl.events.getContactById));

router.post("/", ctrlWrapper(ctrl.events.addContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.events.removeContact));

router.put("/:id", isValidId, ctrlWrapper(ctrl.events.updateContact));

module.exports = router;

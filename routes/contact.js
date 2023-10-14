const express = require("express");
const router = express.Router();

const _contactController = require("../controller/contact");

router.post("/create", _contactController.createContact);
router.put("/update/:id", _contactController.updateContact);
router.get("/getContacts", _contactController.getContacts);
router.get("/getContactById/:id", _contactController.getContactbyId);
router.get("/delete/:id", _contactController.deleteContact);

module.exports = router;

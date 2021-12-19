const { Router } = require("express");
const { contactController } = require("../controllers/contact.controller");

const router = Router();

router.get("/contact", contactController.getContacts);
router.post("/contact", contactController.addContact);
router.delete("/contact/:id", contactController.removeContact);
router.patch("/contact/:id", contactController.editContact);

module.exports = router;

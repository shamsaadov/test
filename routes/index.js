const { Router } = require("express");
const user = require("./user.routes");
const contact = require("./contact.routes");

const router = Router();

router.use(user);
router.use(contact);

module.exports = router;

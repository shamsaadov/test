const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    default: "898999999",
  },
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;

const Contact = require("../models/Contact");

module.exports.contactController = {
  getContacts: async (req, res) => {
    const contacts = await Contact.find();
    return res.json(contacts);
  },
  addContact: async (req, res) => {
    const { name, desc, number } = req.body;
    if (!name || !desc || !number) {
      return res.status(400).json({
        error: "Error!",
      });
    }
    const contacts = await Contact.create({
      name,
      desc,
      number,
    });
    return res.json(contacts);
  },
  removeContact: async (req, res) => {
    const { id } = req.params;
    try {
      const removed = await Contact.findByIdAndRemove(id);

      if (!removed) {
        return res.status(400).json({
          error: "Error. Wrong ID",
        });
      }

      return res.json("Contact removed");
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  editContact: async (req, res) => {
    const { name, desc, number } = req.body;
    const { id } = req.params;
    if (!name || !desc || !number) {
      return res.status(400).json({
        error: "Error",
      });
    }
    const contact = await Contact.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res.json(contact);
  },
};

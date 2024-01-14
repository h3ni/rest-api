const router = require("express").Router();
const Contact = require("../models/Contact");

//add contact
router.post("/add-contact", async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;
    const findEmail = await Contact.findOne({ email: email });
    if (findEmail) {
      res.json({ status: 409, msg: "Email is already exists !" });
    } else {
      const newContact = await Contact.create({
        firstName,
        lastName,
        phone,
        email,
      });
      res.json({
        status: 201,
        msg: "contact created",
        data: newContact,
      });
    }
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
});
router.get("/get-contact", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json({ status: 200, msg: "contact ...", data: contacts });
  } catch (err) {
    res.json({ status: 500, msg: err });
  }
});
router.put("/update-contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateContact = await Contact.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.json({ status: 200, msg: "contact updated", data: updateContact });
  } catch (err) {
    res.json({ status: 500, msg: err });
  }
});
router.delete("/delete-contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteContact = await Contact.findByIdAndDelete(id);
    res.json({ status: 200, msg: "contact deleted", data: deleteContact });
  } catch (err) {
    res.json({ status: 500, msg: err });
  }
});
module.exports = router;

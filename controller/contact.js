const Contact = require("../models/contact");
const Joi = require("joi");

function validateContact(contact) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    country: Joi.string(),
    phone: Joi.string(),
    about: Joi.string(),
  });

  return schema.validate(contact);
}
const createContact = async (req, res) => {
  const { error } = validateContact(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
const getContactbyId = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(400).send("Contact not found");
  res.json(contact);
};
const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndRemove(req.params.id);
  if (!contact) return res.status(400).send("Contact not found");
  res.json(contact);
};

const updateContact = async (req, res) => {
  const { error } = validateContact(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!contact) return res.status(400).send("Contact not found");
  res.json(contact);
};

module.exports = {
  createContact,
  getContacts,
  getContactbyId,
  deleteContact,
  updateContact,
};

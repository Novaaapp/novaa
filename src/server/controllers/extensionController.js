const prisma = require('../models/prismaClient.js');

exports.createExtension = async (req, res) => {
  try {
    const ext = await prisma.extension.create({ data: req.body });
    res.json(ext);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExtensions = async (req, res) => {
  const ext = await prisma.extension.findMany();
  res.json(ext);
};

exports.getExtension = async (req, res) => {
  const ext = await prisma.extension.findUnique({ where: { id: +req.params.id } });
  if (!ext) return res.status(404).json({ error: "Extension not found" });
  res.json(ext);
};

exports.updateExtension = async (req, res) => {
  try {
    const updated = await prisma.extension.update({
      where: { id: +req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteExtension = async (req, res) => {
  try {
    await prisma.extension.delete({ where: { id: +req.params.id } });
    res.json({ message: "Extension deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

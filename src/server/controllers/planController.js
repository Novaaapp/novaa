const prisma = require('../models/prismaClient.js');

exports.createPlan = async (req, res) => {
  try {
    const plan = await prisma.plan.create({ data: req.body });
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPlans = async (req, res) => {
  const plans = await prisma.plan.findMany({ include: { users: true } });
  res.json(plans);
};

exports.getPlan = async (req, res) => {
  const plan = await prisma.plan.findUnique({ where: { id: +req.params.id } });
  if (!plan) return res.status(404).json({ error: "Plan not found" });
  res.json(plan);
};

exports.updatePlan = async (req, res) => {
  try {
    const updated = await prisma.plan.update({
      where: { id: +req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    await prisma.plan.delete({ where: { id: +req.params.id } });
    res.json({ message: "Plan deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const ExamSchema = require("../models/ExamSchema");
const express = require("express");
const router = express.Router();

router.get("/allexams", async (req, res) => {
  try {
    const examData = await ExamSchema.find();
    res.send(examData);
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
});

router.post("/addexam", async (req, res) => {
  const { text, link } = req.body;

  try {
    const data = new ExamSchema({
      text,
      link,
    });

    const saveExam = await data.save();
    res.json(saveExam);
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
});

router.delete("/deleteexam/:id", async (req, res) => {
  try {
    let findData = await ExamSchema.findById(req.params.id);

    if (!findData) {
      return res.status(404).json({ error: "Exam not found" });
    }

    findData = await ExamSchema.findByIdAndDelete(req.params.id);
    res.json({ success: "Exam Deleted" });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;

const express = require("express");
const app = express();
const cors = require("cors");
const routes = express.Router();

const grammar = {
  questions: [
    {
      question: "1- Choose the right option",
      answer: [
        "A) Marcio is run.",
        "B) Marcio was run",
        "C) Marcio is running",
        "D) Marcio will running",
      ],
      correct_answer: "C) Marcio is running",
    },
    {
      question: "2- The past of the verb run is...",
      answer: ["A) run.", "B) ran", "C) rin", "D) ron"],
    },
    {
      question: "3- Which past tense use 'did' as  an auxiliar verb?",
      answer: [
        "A) Past Perfect",
        "B) Past Continuous",
        "C) Simple Past",
        "D) Past Perfect Continuous",
      ],
    },
  ],
};
app.use(cors());
app.get("/grammar", (req, res) => {
  return res.json(grammar);
});
app.listen("3333");

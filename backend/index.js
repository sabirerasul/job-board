const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./src/routes/jobRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

mongoose.connect("mongodb://localhost:27017/jobboard");

app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

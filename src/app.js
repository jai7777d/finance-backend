require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/records", require("./routes/recordRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

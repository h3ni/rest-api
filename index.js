const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const PORT = 5000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on ${PORT}`);
});
app.use(express.json());
connectDB();

app.use("/api/contacts/", require("./routes/contact"));

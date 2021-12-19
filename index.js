require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);
app.use(morgan("dev"));

const connectAndStartServer = async () => {
  const { PORT, MONGO } = process.env;

  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Успешно соединились. Порт ${PORT}`);
    });
  } catch (e) {
    console.log(`Ошибка при подключении: ${e.toString()}`);
  }
};
connectAndStartServer();

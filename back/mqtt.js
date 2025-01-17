const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const mqttRouter = require("./router/mqttRouter"); // 라우터 추가

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

//cors설정
const allowedOrigins = ["http://192.168.0.33:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// 몽고디비 연결
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

const {
  mqttClient,
  connectToMqttBroker,
  subscribeToMqttTopic,
} = require("./mqttClient");

//mqtt브로커 연결
connectToMqttBroker();

//토픽구독
subscribeToMqttTopic();

// WebSocket 연결 및 데이터 전송
const topic = "edukit/control";
wss.on("connection", function connection(ws) {
  console.log("클라이언트 연결됨");

  mqttClient.on("message", function (topic, message) {
    console.log("메시지 받음:", message.toString());
    ws.send(message.toString());
  });

  ws.on("message", function (message) {
    mqttClient.publish(topic, message);
  });
});

app.use("/mqtt", mqttRouter);

server.listen(8081, function () {
  console.log("Server is listening on port 8081");
});

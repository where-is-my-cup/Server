const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();
const http = require("http");
app.io = require("socket.io")();
const tokenParser = require("./middleware/tokenParser");
app.use(cors());
app.use(express.json());
app.use(tokenParser);
app.use(router);

const store = {};

app.io.on("connection", function(socket) {
  console.log("socket start");

  /* 매장 로그인 부분 */
  socket.on("storeLogin", function(data) {
    socket.join("room_" + data.storeId);
    store[data.storeId] = data.storeSocketId;
  });

  /* 주문 들어오는 부분 */
  socket.on("ordering", function(data) {
    socket.join("room_" + data.storeId);
    console.log(data.orderList[0].selectMenu);
    app.io.to(store[data.storeId]).emit("ordering", data);
  });

  /* 주문 처리하는 부분 */
  socket.on("completedOrder", function(data) {
    app.io.to(data.user_socketId).emit("completedOrder", true);
  });
  /* 각 손님에게 대기번호 알려주는 부분 */
  socket.on("waiting", function(data) {
    app.io.sockets.in("room_" + data.storeId).emit("waiting", data.waiting);
  });
  /* Room 나가는 부분 */
  socket.on("leaveRoom", function(data) {
    socket.leave(data.storeId);
  });
});

var server = http.createServer(app);
app.io.attach(server);

server.listen(3001, "localhost", () => {
  console.log("Start Server");
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// socket.io server setup
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io"); //pulling this directly from socket.io library

// cors middleware for app
const cors = require('cors');
app.use(cors()); //needed because broweser was being buggy

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}); //passing the server to the socket.io, this is what connects it
// telling socket.io that it is okay to accept communication with this client
// client is running on localhost:3000

io.on('connection', (socket) => {
  console.log(`a user connected: ${socket.id}`);
  // a user is given a socket id on connection.

  socket.on("disconnect", () => {
    console.log(`a user disconnected: ${socket.id}`)
  }) // the same socket id should be seen as "disconnected" when the page refreshes
  // but also on refresh a new socket id is delivered because of that new socket connection.
});

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const messageRouter = require('./routes/message.router');
const profileRouter = require('./routes/profile.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/message', messageRouter);
app.use('/api/profile', profileRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });

// socket.io server listening... 
// This like combined socket server and express server
server.listen( PORT, () => {
  console.log(`socket is listening on... ${PORT}` )
});

//io.on sets up connection
//emit comes from server or client
// queries are right in server
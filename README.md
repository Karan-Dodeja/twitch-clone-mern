MongoDB for Database: 
because 1.Document based storage, 2.Scalability, 3.Performance, 4.High Availability.

Express for server side: 
because 1.Simplicity, 2.Middleware Integration, 3.Routing, 4.Performance

React for Frontend: 
because 1.Popularity, 2.Component-based, 3.Virtual DOM, 4.Easy to start.

Node for Server side engine for javascript: 
because 1.Single Language, 2.Asynchronous Non-blocking I/O, 3.NPM Ecosystem, 4.Event-Driven Architecture.

Socket.io for Real time Communication: 
because 1.Native JS Support, 2.Built-in Rooms, 3.Heartbeats, 4.Real-time Communication.

MERN Stack: 
because 1.Fullstack Javascript, 2.Efficient Data Flow, 3.High Scalability, 4.Rich Ecosystem, 5.Socket.io Integration, 6.Strong Community, 7.Const-Effective.

Packages/Dependencies on server side:
bcrypt.js, cors, dotenv. express,express-joi-validation, joi, jsonwebtoken, mongoose, nodemon, socket.io, uuid

Routes:
SETTING'S ROUTE:
/api/settings/channel GET, payload() resonse(id, username, title, desc, avatarurl, streamkey), isSecured(True)

/api/settings/channel PUT payload(username, desc, title, avatar) resonse(username, title, desc, avatarurl), isSecured(True)

/api/settings/password patch payload(password, newPassword) resonse(200 Success Message), isSecured(True)

CHANNEL'S ROUTE:
/api/channels GET payload() response(id, title, avatarUrl, username, isOnline), isSecured(False)

/api/channels/:channelld GET payload() response(id, title, desc, username, isOnline, streamUrl), isSecured(False)

/api/channels/followed GET payload() response(Arrays with ids of followed channels), isSecured(True)

/api/channels/follow POST payload(channelid) response(200 with success message), isSecured(True)

git config --global http.sslVerify false
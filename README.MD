# REACT-LIFE-API
NODE EXPRESS API LIFE CYCLE - This project is a part of the REACT-LIFE project

A. mongoDB-Mongoose
B. MySQL-Sequalize

### :beetle: The Stack
* NodeJs - 
* Node Express - Restful API

* MongoDB - NOSQL non-schema, non relational DB
* Mongoose - ORM for Mongo
* RoboT3 - Mongo visual

* WebPack2 - Build tool, JS & CSS bundler
* Babel - ES6 transpiler

* JWT (JSON Web Token) - local Auth
* BCrypt - hashing encryption


## :beetle: Steps To Install
* 1) cmd> mkdir app_name
* 2) cmd> npm init
* 3) cmd> npm install express --save
* 4) create index/app.js [create express RESTful api here]
* 5) create server.js [create node server here]
* 6) cmd> npm install --save  react react-dom
* 7) cmd> npm install --save-dev  babel-core babel-loader babel-preset-react
* 8) create .babelrc at root and paste { "presets": ["react"] }
* 9) cmd> npm install --save-dev webpack webpack-dev-server html-webpack-plugin

START MONGODB: cmd> sudo service mongod start
STOP MONGODB:  cmd> sudo service mongod stop
RESTART MONGODB:  cmd> sudo service mongod restart
USING MONGODB SHELL:  cmd> mongo --host 127.0.0.1:27017

## :beetle: Build & Start the app
* To build the project: cmd> npm run build
* To start the server and run attached project app: cmd> npm run start

## :beetle: THE APP EXEC FLOW:
### ON CLIENT SIDE
* Header component loaded
* Footer component loaded
* userList loaded
* dashboard component loaded
* NotFound component loaded
* master root routes loaded
* master laytout loaded by route
* MasterLayout component loaded
* react app executed
### ON NODE SERVER
* express api controller loaded
* express api root router loaded
* react + express api root route added to server
* server started with webpack
* webpack.config loaded
* sever started on port:  3000

## :beetle: Authors
**Navid Mostafiz**
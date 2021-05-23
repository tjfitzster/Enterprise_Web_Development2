
const Users = require("./app/api/users");
const Candidates = require('./app/api/candidates');

module.exports = [

  { method: "GET", path: "/api/users", config: Users.find },
  { method: "GET", path: "/api/users/{id}", config: Users.findOne },
  { method: "POST", path: "/api/users", config: Users.create },
  { method: "DELETE", path: "/api/users/{id}", config: Users.deleteOne },
  { method: "DELETE", path: "/api/users", config: Users.deleteAll },
  { method: "PUT", path: "/api/users/{id}", config: Users.update },

  { method: 'GET', path: '/api/candidates', config: Candidates.find },

  { method: "POST", path: "/api/users/authenticate", config: Users.authenticate },
];


const Users = require("./app/api/users");
const Pois = require("./app/api/poi");

module.exports = [

  { method: "GET", path: "/api/users", config: Users.find },
  { method: "GET", path: "/api/users/{id}", config: Users.findOne },
  { method: "POST", path: "/api/users", config: Users.create },
  { method: "DELETE", path: "/api/users/{id}", config: Users.deleteOne },
  { method: "DELETE", path: "/api/users", config: Users.deleteAll },
  { method: "PUT", path: "/api/users/{id}", config: Users.update },

 // { method: "GET", path: "/api/poi", config: Pois.findAll },
// { method: "GET", path: "/api/candidates/{id}/poi", config: Pois.findByContributor },
//  { method: "DELETE", path: "/api/pois", config: Pois.deleteAll },

  { method: "POST", path: "/api/users/authenticate", config: Users.authenticate },
];

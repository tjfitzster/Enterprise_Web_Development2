
const Users = require("./app/api/users");
const Catagories = require('./app/api/catagories');
const Pois = require('./app/api/poi');

module.exports = [
  { method: "GET", path: "/api/catagories", config: Catagories.find },
  { method: "GET", path: "/api/catagories/{id}", config: Catagories.findOne },
  { method: "POST", path: "/api/catagories", config: Catagories.create },
  { method: "DELETE", path: "/api/catagories/{id}", config: Catagories.deleteOne },
  { method: "DELETE", path: "/api/catagories", config: Catagories.deleteAll },

  { method: "GET", path: "/api/users", config: Users.find },
  { method: "GET", path: "/api/users/{id}", config: Users.findOne },
  { method: "POST", path: "/api/users", config: Users.create },
  { method: "DELETE", path: "/api/users/{id}", config: Users.deleteOne },
  { method: "DELETE", path: "/api/users", config: Users.deleteAll },
  { method: "PUT", path: "/api/users/{id}", config: Users.update },
  { method: "GET", path: "/api/pois", config: Pois.findAll },
  { method: "GET", path: "/api/contributor/{id}/pois", config: Pois.findByContributor },
 { method: "DELETE", path: "/api/pois", config: Pois.deleteAll },



  { method: "POST", path: "/api/users/authenticate", config: Users.authenticate },
];
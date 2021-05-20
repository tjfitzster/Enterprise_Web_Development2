"use strict";

const Accounts = require("./app/controllers/accounts");
const Donations = require("./app/controllers/donations");
const POIs = require("./app/controllers/POI");
const multer = require("multer");

module.exports = [
    { method: "GET", path: "/", config: Accounts.index },
    { method: "GET", path: "/signup", config: Accounts.showSignup },
    { method: "GET", path: "/login", config: Accounts.showLogin },
    { method: "GET", path: "/logout", config: Accounts.logout },
    { method: "POST", path: "/signup", config: Accounts.signup },
    { method: "POST", path: "/login", config: Accounts.login },
    { method: 'GET', path: '/settings', config: Accounts.showSettings },
    { method: 'POST', path: '/settings', config: Accounts.updateSettings },

    { method: "GET", path: "/home", config: POIs.home },
   // { method: "POST", path: "/donate", config: Donations.donate },

    { method: "GET", path: "/report", config: POIs.report },
    { method: "POST", path: "/addpoi", config: POIs.addPoi },

    {
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "./public",
            },
        },
        options: { auth: false },
    },
];
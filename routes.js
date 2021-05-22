"use strict";

const Accounts = require("./app/controllers/accounts");
const Gallery = require('./app/controllers/gallery');
const POIs = require("./app/controllers/POI");


module.exports = [
    { method: "GET", path: "/", config: Accounts.index },
    { method: "GET", path: "/signup", config: Accounts.showSignup },
    { method: "GET", path: "/login", config: Accounts.showLogin },
    { method: "GET", path: "/logout", config: Accounts.logout },
    { method: "POST", path: "/signup", config: Accounts.signup },
    { method: "POST", path: "/login", config: Accounts.login },
    { method: 'GET', path: '/settings', config: Accounts.showSettings },
    { method: 'POST', path: '/settings', config: Accounts.updateSettings },
    { method: 'POST', path: '/uploadfile', config: Gallery.uploadFile },
    { method: "GET", path: "/home", config: POIs.home },

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
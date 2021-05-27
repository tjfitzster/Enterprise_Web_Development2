"use strict";

const assert = require("chai").assert;
const axios = require("axios");

suite("POI API tests", function () {

  test("get api's", async function () {
    const response = await axios.get("http://localhost:3000/api/pois");
    const pois = response.data;
    assert.equal(4, pois.length);

  });

});


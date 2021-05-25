"use strict";

const assert = require("chai").assert;
const axios = require("axios");


suite("Candidate API tests", function () {
  test("get candidates", async function () {
    const response = await axios.get("http://localhost:3000/api/catagories");
    console.log(response.data);
  });
});
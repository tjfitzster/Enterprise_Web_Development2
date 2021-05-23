"use strict";

const assert = require("chai").assert;


suite("Candidate API tests", function () {
  test("get candidates", async function () {
    const response = await axios.get("http://localhost:3000/api/candidates");
    console.log(response.data);
  });
});
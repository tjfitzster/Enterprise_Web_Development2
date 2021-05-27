"use strict";

const assert = require("chai").assert;
const axios = require("axios");

suite("Catagory API tests", function () {

  test("create a poi", async function () {
    const returnedCandidate = await donationService.createCandidate(newCandidate);
    await donationService.makeDonation(returnedCandidate._id, donations[0]);
    const returnedDonations = await donationService.getDonations(returnedCandidate._id);
    console.log(returnedDonations);
    assert.equal(returnedDonations.length, 1);
    assert(_.some([returnedDonations[0]], donations[0]), "returned donation must be a superset of donation");
  });

});


"use strict";

 const assert = require("chai").assert;
 const axios = require("axios");

 suite("Catagory API tests", function () {

   test("get catagories", async function () {
     const response = await axios.get("http://localhost:3000/api/catagories");
     const catagories = response.data;
     assert.equal(4, catagories.length);

     assert.equal(catagories[0].CatagoryName, "Sport");
     assert.equal(catagories[0].Type, "Football");

     assert.equal(catagories[1].CatagoryName, "Historic");
     assert.equal(catagories[1].Type, "Irish");

     assert.equal(catagories[2].CatagoryName, "Political");
     assert.equal(catagories[2].Type, "Irish");

     assert.equal(catagories[3].CatagoryName, "Educational");
     assert.equal(catagories[3].Type, "Geography");
   });

   test("create a catagory", async function() {
     const catagoryUrl = "http://localhost:3000/api/catagories";
     const newCatagory = {
      CatagoryName: "Barnie",
       Type: "Grumble"
     };

     const response = await axios.post(catagoryUrl, newCatagory);
     const returnedCatagory = response.data;
    assert.equal(201, response.status);

     assert.equal(returnedCatagory.CatagoryName, "Barnie");
     assert.equal(returnedCatagory.Type, "Grumble");
   });

   test("delete a catagory", async function () {
     let response = await axios.get("http://localhost:3000/api/catagories");
     let catagories = response.data;
     const originalSize = catagories.length;

     const oneCatagoryUrl = "http://localhost:3000/api/catagories/" + catagories[catagories.length-1]._id;
     response = await axios.get(oneCatagoryUrl);
     const oneCatagory = response.data;
     assert.equal(oneCatagory.CatagoryName, "Barnie");

     response = await axios.delete("http://localhost:3000/api/catagories/" + catagories[catagories.length-1]._id);
     assert.equal(response.data.success, true);

     response = await axios.get("http://localhost:3000/api/catagories");
     catagories = response.data;
    assert.equal(catagories.length, originalSize - 1);

   });

 });


var chai = require("chai"),
  passport = require("chai-passport-strategy");

chai.use(passport);

if (typeof window !== "undefined") {
  window.expect = chai.expect;
}

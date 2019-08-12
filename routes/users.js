const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Valid email is required").isEmail(),
    check(
      "password",
      "Password must be at least 8 characters in length"
    ).isLength({ min: 8 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("OK!");
  }
);

module.exports = router;

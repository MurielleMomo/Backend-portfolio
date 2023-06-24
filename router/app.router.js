const express = require('express');
const router = express.Router();
const controller = require("../controller/app.controller");


// Define your routes here
router.get("/portfolio",controller.portfolioAppRoute);
router.get("/testimonial",controller.testimonialAppRoute);


module.exports = router;

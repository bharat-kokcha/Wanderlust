const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");

const reviwController=require("../controllers/reviews.js")



//Reviews
//Post Review Route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviwController.createReview)
);

//Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviwController.destroyReview)
);

module.exports = router;

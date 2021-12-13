const express = require("express");
const router = express.Router();

// import controller
const {
    registerController,signInController,googleController,
    activateController
} = require("../controllers/auth.controllers");


router.post("/register",registerController);
router.get("/signin",signInController);
router.get("/activate",activateController);
router.post("/googleAuthentification",googleController);

module.exports = router;


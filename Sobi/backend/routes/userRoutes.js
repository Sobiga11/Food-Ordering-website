const UserController = require('../controllers/userController'); // Import the UserController
const express = require('express');
const router = express.Router();


router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.post("/login", UserController.login);

module.exports = router;

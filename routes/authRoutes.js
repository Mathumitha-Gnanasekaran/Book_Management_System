const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middlewares/validationMiddleware");
const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;

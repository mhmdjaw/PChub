import express from "express";
import { checkProhibitedAction } from "../controllers/user";
import {
  signup,
  login,
  googleLogin,
  googleAuthResult,
  logout,
  validateSession,
  isAuth,
  changePassword,
  forgotPassword,
} from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/google", googleLogin);
router.get("/google/pchunt", googleAuthResult);
router.get("/logout", logout);
router.get("/session", validateSession);
router.post("/reset", isAuth, checkProhibitedAction, changePassword);
router.post("/forgot-password", forgotPassword);

export default router;

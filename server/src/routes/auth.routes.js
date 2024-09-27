import { Router } from "express";
import { signInCtrl, getMeCtrl, signUpCtrl, } from "../controllers/auth.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { signInValidation, signUpValidation } from "../validations/auth.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const authRouter = Router();

authRouter.post("/sign-in", validateJwt, signInValidation, applyValidations, signInCtrl);
authRouter.post("/sign-up", validateJwt, signUpValidation, applyValidations, signUpCtrl);
authRouter.get("/me", validateJwt, getMeCtrl);

export { authRouter };

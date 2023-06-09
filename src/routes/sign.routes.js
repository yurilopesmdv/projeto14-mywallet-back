import { Router } from "express";
import { logout, signin, signup } from "../controllers/sign.controller.js";
import { validateSignSchema} from "../middlewares/sign.validate.middleware.js";
import { signinSchema, signupSchema } from "../schemas/sign.schema.js";

const signRouter = Router()

signRouter.post("/signup", validateSignSchema(signupSchema), signup)
signRouter.post("/signin",validateSignSchema(signinSchema), signin)
signRouter.delete("/logout", logout)

export default signRouter
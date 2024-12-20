import { Router } from "express";
import UserControllers from "../controllers/user.js";
const UserRouter = Router();
UserRouter.post('/signup',UserControllers.uploadUser);
UserRouter.post('/login',UserControllers.loginUser);
UserRouter.post('/album',)
export default UserRouter;

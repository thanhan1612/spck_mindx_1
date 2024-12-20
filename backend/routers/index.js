import { Router } from "express";
import ArtistRouter from "./artist.js";
import UserRouter from "./user.js";
const RootRouter = Router();
RootRouter.use('/artirst',ArtistRouter);
RootRouter.use('/users',UserRouter);
export default RootRouter;
import express from "express";
import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";

import upload from "../middlewares/multer.js";

const albumRouter = express.Router();

albumRouter.get("/list", listAlbum);
albumRouter.post("/remove", removeAlbum);
albumRouter.post("/add", upload.single("image"), addAlbum);

export default albumRouter;

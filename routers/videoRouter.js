import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controller/videoController";
import { uploadVideo } from "../middleWares";

export const videoRouter = express.Router();

videoRouter.get("/");

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

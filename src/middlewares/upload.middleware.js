import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../config/aws.js";
import path from "path";

// const storage = multer.diskStorage({
//   destination: "src/uploads",
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });
console.log("bucket::", process.env.AWS_BUCKET);

const storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_BUCKET,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    console.log("fileName::", file.originalname);
    const fileName = `uploads/${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });

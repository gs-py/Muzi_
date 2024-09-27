import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  console.log(process.env.CLOUDINARY_NAME),
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
};

// cloudinary.api.ping((error, result) => {
//   if (error) {
//     console.error("Cloudinary connection failed:", error);
//   } else {
//     console.log("Cloudinary connection successful:", result);
//   }
// });

export default connectCloudinary;

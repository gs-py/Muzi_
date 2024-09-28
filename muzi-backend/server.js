import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js"; // Import the songRouter
import connectDb from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoutes.js";

// app config
const app = express();

const port = process.env.PORT || 4000;
connectDb()
  .then(() => console.log("Connection Sucessfull"))
  .catch((error) => console.error("Connection failed:", error));
connectCloudinary()
  .then(() => {
    console.log("cloudinary connected sucessfull");
  })
  .catch((error) => console.error("Connection failed:", error));

app.use(express.json());

app.use(cors()); // frontend to backend

// initializing routes
app.use("/api/song", songRouter); // Add the songRouter middleware
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("its from backend");
});

// start app
app.listen(port, () => {
  console.log(`server Started on ${port}`);
});

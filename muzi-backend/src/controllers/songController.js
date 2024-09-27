import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const imageFile = req.files?.image[0];
    const audioFile = req.files.audio[0];

    if (!imageFile || !audioFile) {
      return res
        .status(400)
        .json({ error: "Image and audio files are required." });
    }

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    res.status(201).json({
      message: "Song uploaded successfully!",
      name,
      desc,
      album,
      audio: audioUpload.url,
      image: imageUpload.url,
    });
    console.log(name, desc, audioUpload, imageUpload);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while uploading the song." });
  }
};

const listSong = async (req, res) => {};

export { addSong, listSong };

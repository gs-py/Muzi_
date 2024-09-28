import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const imageFile = req.files?.image[0];
    const audioFile = req.files?.audio[0];
    console.log(audioFile);

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

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };
    // uploading to databse

    const song = songModel(songData);
    await song.save();

    res.status(201).json({
      message: "Song uploaded successfully!",
      name,
      desc,
      album,
      audio: audioUpload.url,
      image: imageUpload.url,
    });
    console.log(name, desc, audioUpload.secure_url, imageUpload.secure_url);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while uploading the song." });
    console.log(error);
  }
};

// listing song
const listSong = async (req, res) => {
  try {
    console.log("List song Api called");
    const songs = await songModel.find(); // Retrieve all songs from the database
    if (!songs || songs.length === 0) {
      return res
        .status(404)
        .json({ message: "No songs found in the database." });
    }
    res.status(200).json({ songs });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching songs from the database.",
    });
    console.log(error);
  }
};

const removeSong = async (req, res) => {
  try {
    console.log("DELETE BY ID Api Called ....!");
    const song = await songModel.findById(req.body.id);
    console.log(song);

    await songModel.findByIdAndDelete(req.body.id);

    // Return the details of the deleted song in the response
    res.status(201).json({
      success: true,
      message: "Song removed successfully.",
      removedSongData: song, // Show data of the removed song
    });
  } catch (error) {
    res.status(400).json({
      message: "some error occured",
      error: `${error}`,
    });
  }
};

export { addSong, listSong, removeSong };

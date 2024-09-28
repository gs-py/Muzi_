import { v2 as cloudinary } from "cloudinary";

import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;

    const desc = req.body.desc;
    const bgColor = req.body.bgColor;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();
    res.status(201).json({
      success: true,
      message: "album Added",
      "album Details": albumData,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allalbum = await albumModel.find({});
    res.status(200).json({
      success: true,
      albums: allalbum,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

const removeAlbum = async (req, res) => {
  try {
    const albd = await albumModel.findById(req.body.id);
    if (!albd) {
      res.status(400).json({
        message: "The Album Id entered Doesnt Exist....{already deleted}",
      });
    } else {
      await albumModel.findByIdAndDelete(req.body.id);
      res.status(201).json({
        message: "Deleted Album",
        "Album Deleted": albd,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Cannot Delete Album",
      error: error.message,
    });
  }
};

export { listAlbum, removeAlbum, addAlbum };

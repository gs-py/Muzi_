import mongoose from "mongoose";
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established!");
});
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/musi`,
      {}
    );
    console.log(`MongoDB connected: ${connection.connection.host}`);
    // const admin = mongoose.connection.db.admin();
    // const dbList = await admin.listDatabases();
    // console.log(admin, dbList);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDb;

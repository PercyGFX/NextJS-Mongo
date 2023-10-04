import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongo Db connected");
    });

    connection.on("error", (err) => {
      console.log("mongo db error" + err);
      process.exit();
    });
  } catch (err) {
    console.log("database error" + err);
  }
}

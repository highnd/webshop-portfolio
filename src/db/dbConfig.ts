import mongoose from "mongoose";

export async function connect() {
  try {
    // try to connect to mongo db
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo db connected successfully");
    });

    // error of connection to mongo db
    connection.on("error", (err) => {
      console.log("Mongo db connection error" + err);
      process.exit();
    });

    // global connection error
  } catch (error: any) {
    console.log("something goes wrong!!", error);
  }
}

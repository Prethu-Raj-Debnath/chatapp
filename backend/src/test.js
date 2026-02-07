import mongoose from "mongoose";

 const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://chatapp_user:eOHRkonWCereL0qh@cluster0.ye3oztz.mongodb.net/chatapp_db?appName=Cluster0");
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
connectDB();
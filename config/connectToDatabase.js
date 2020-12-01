import mongoose from "mongoose"
import config from "config"

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("MongoDb is connected...")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectToDatabase

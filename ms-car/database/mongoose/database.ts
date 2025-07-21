import mongoose from "mongoose";

export interface MongooseSettings {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: MongooseSettings) {
    const { dbName, mongoUrl } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName
      });

      console.log("Mongo connected");
      return true;
    } catch (error) {
      console.log("Mongo connection error");
      throw error;
    }
  }
}

import mongoose from "mongoose";
export class ConnectDatabase {
    static async connect() {
        const DB_URL = 'mongodb+srv://trung:trung123456!@cluster0.z5ztbaa.mongodb.net/casestudy';

        await mongoose.connect(DB_URL)

            .then(() => console.log('DB Connected!'))

            .catch(error => console.log('DB connection error:', error.message));
    }
}


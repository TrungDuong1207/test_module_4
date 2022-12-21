import mongoose from "mongoose";
export class ConnectDatabase {
    static async connect() {
        const DB_URL = 'mongodb://127.0.0.1:27017/casestudy';

        await mongoose.connect(DB_URL)
    
        .then(() => console.log('DB Connected!'))
    
        .catch(error => console.log('DB connection error:', error.message));
    }
}


import mongoose from "mongoose";
declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: "user" | "admin";
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: "user" | "admin";
}>>;
export { User };

import mongoose from "mongoose";
declare const User: mongoose.Model<{
    role: "user" | "admin";
    name?: string;
    email?: string;
    password?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    role: "user" | "admin";
    name?: string;
    email?: string;
    password?: string;
}>>;
export { User };

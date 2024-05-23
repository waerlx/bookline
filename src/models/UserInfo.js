import mongoose, { Schema, models } from "mongoose";

const UserInfoSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    admin: { type: Boolean, default: false },
}, { timestamps: true });
export const UserInfo = models?.UserInfo || mongoose.model("UserInfo", UserInfoSchema);
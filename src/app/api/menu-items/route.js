import {MenuItem} from "../../../models/MenuItems";
import mongoose from "mongoose";
export async function POST(req){
    mongoose.connect(process.env.MONGODB_URI);
    const data = await req.json();
    const MenuItemDoc = await MenuItem.create(data);
    return Response.json(MenuItemDoc);
}
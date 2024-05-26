import {MenuItem} from "../../../models/MenuItems";
import mongoose from "mongoose";
export async function POST(req){
    mongoose.connect(process.env.MONGODB_URI);
    const data = await req.json();
    const MenuItemDoc = await MenuItem.create(data);
    return Response.json(MenuItemDoc);
}
export async function PUT(req){
    mongoose.connect(process.env.MONGODB_URI);
    const {_id, ...data} = await req.json();
    await MenuItem.findByIdAndUpdate(_id, data);
    return Response.json(true);
}

export async function GET(req){
    mongoose.connect(process.env.MONGODB_URI);
    const MenuItemDoc = await MenuItem.find();
    return Response.json(
        await MenuItem.find()
    );
}
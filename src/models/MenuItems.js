import mongoose, {model, models, Schema} from "mongoose";
const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new Schema({
  image: {type: String},
  name: {type: String},
  author: {type: String},
  genre: {type: String},
  description: {type: String},
  price: {type: Number},
  covers: {type:[ExtraPriceSchema]},
  paper: {type:[ExtraPriceSchema]},

}, {timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);
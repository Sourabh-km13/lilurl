import mongoose from "mongoose";
import { Document , Schema ,Model } from "mongoose";

const urlSchema = new mongoose.Schema({
    orignalUrl:{
        type:String,
        required:true,
        unique:true,
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true,
    }
    
},{
    timestamps:true
})

export interface Iurl extends Document{
    orignalUrl : string,
    shortUrl : string,
}
const Url: Model<Iurl> = mongoose.models.Url || mongoose.model<Iurl>('Url',urlSchema)
export default Url
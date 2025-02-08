import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    visitorId:{
        type:String ,
        required:true
    },
    inmate:{
        type:String ,
        required:true
    },
    visitorsName:{
        type:String ,
        required:true
    },
    relation:{
        type:String ,
        required:true
    },
    phone:{
        type:String ,
        required:true
    }, date:{
        type:Date ,
        required:true
    }
},{timestamps:true});
export const Visitor=mongoose.model('Visitor',userSchema);
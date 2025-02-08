import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
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
export const User=mongoose.model('Visitor',userSchema);
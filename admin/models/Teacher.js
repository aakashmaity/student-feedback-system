import { Schema, model, models }  from "mongoose";

const TeacherSchema = new Schema({
    tid : {type: String, required: true},
    name: {type:String,required:true},
    email: {type: String},
    // image: {type: String},
    dateofbirth: {type: String},
    dateofjoining : {type: String},
    department: {type: String},
    subjects : {type:String},
},{
    timestamps: true,
})

export const Teacher = models?.Teacher || model('Teacher',TeacherSchema)
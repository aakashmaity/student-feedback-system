import { Schema, model, models }  from "mongoose";

const StudentSchema = new Schema({
    username: {type: String},
    password : {type : String},
    rollno : {type : String},
    email : {type : String},
    name: {type:String,required:true},
    dateofbirth: {type: String},
    dateofadmission : {type: String},
    graduationyear: {type: String},
    department : {type: String}
},{
    timestamps: true,
})

export const Student = models?.Student || model('Student',StudentSchema)
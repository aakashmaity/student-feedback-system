const { Schema, model, models, default: mongoose } = require("mongoose");

const FeedbackSchema = new Schema({
    tname: {type: String},
    tid: {type: String},
    temail: {type: String},
    subjectknowledge: {type: Number},
    behaviour: {type: Number},
    positivity: {type: Number},
    motivation: {type: Number},
    timepunctuality: {type: Number},
    interaction: {type: Number},
    doubtclearing : {type: Number},
    comment: {type:String},
})

export const Feedback = models?.Feedback || model('Feedback',FeedbackSchema)
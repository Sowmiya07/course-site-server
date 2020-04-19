const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const CourseSchema = new Schema(
    {
        name: String
    },
    {
        timeStamps: true
    }
);

CourseSchema.index({name: 'text'});

const course = model('course', CourseSchema);

module.exports = course
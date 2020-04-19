const course = require('./models');

const getCourses = async (req, res) => {
    let allCourses = await course.find({});
    res.json({
        data: allCourses
    });
}

const getCourse = async (req, res) => {
    let id = req.params.id;
    
    let courseData = await course.findById( id).lean();

    res.json({
        data: courseData
    });
}

const postCourse = async (req, res) => {
    let newCourse = req.body;
    
    await course.create(newCourse)

    res.json({
        message: "Course has been added"
    });
}

const putCourse = async (req, res) => {
    let id = req.params.id;

    await course.findByIdAndUpdate(id, req.body, {new: true});

    res.json({
        message: "tweet is updated"
    })
}

const deleteCourse = async (req, res) => {
    let id = req.params.id;

    await course.findByIdAndDelete(id)

    res.json({
        message: "Course has been deleted"
    });
}

module.exports = {
    getCourse,
    getCourses, 
    postCourse,
    putCourse,
    deleteCourse
}
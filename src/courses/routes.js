const router = require('express').Router();

const {
    getCourse, getCourses, putCourse, postCourse, deleteCourse
}  = require('./controller');

// router.use((req, res, next) => {
//     req.requestTime = new Date().toDateString();
//     next();
// });

router.get('/', getCourses);

router.get('/:id', getCourse);

router.post('/', postCourse);

router.put('/:id', putCourse);

router.delete('/:id', deleteCourse);

// router.use('/', (req, res) => {
//     res.json({
//         message: ` I am connected by ${req.requestTime}`
//     });
// });

module.exports = router
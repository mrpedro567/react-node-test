const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const payload = req.query;
    res.json({ students: await getAllStudents(payload)});
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const body = req.body;
    const {id} = req.params;
    res.json(await addNewStudent(body));
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const body = req.body;  
    const {id} = req.params;

    res.json(await updateStudent({...body, userId: id}));
    
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    res.json(await getStudentDetail(id));

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const {status, reviewerId} = req.body;
    res.json(await setStudentStatus({userId: id, status, reviewerId}));
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};

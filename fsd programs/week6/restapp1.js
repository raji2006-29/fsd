const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to Express REST API");
});


app.get('/student/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: "Student Details",
        studentId: id
    });
});


app.get('/search', (req, res) => {
    const { course, trainer } = req.query;

    res.json({
        course,
        trainer
    });
});


app.post('/student', (req, res) => {

    const student = req.body;

    res.json({
        message: "Student Added Successfully",
        data: student
    });
});

app.put('/student/:id', (req, res) => {

    const id = req.params.id;
    const updatedData = req.body;

    res.json({
        message: "Student Updated Successfully",
        studentId: id,
        updatedData
    });
});


app.delete('/student/:id', (req, res) => {

    const id = req.params.id;

    res.json({
        message: "Student Deleted Successfully",
        studentId: id
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
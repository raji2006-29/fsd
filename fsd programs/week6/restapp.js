import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to Express REST API');
});
app.get('/student/:id', (req, res) => {
    res.json({
        studentId: req.params.id
    });
});
app.post('/student', (req, res) => {
    res.json({
        message: "Student Added",
        data: req.body
    });
});
app.put('/student/:id', (req, res) => {
    res.json({
        message: "Student Updated",
        id: req.params.id,
        data: req.body
    });
});
app.delete('/student/:id', (req, res) => {
    res.json({
        message: "Student Deleted",
        id: req.params.id
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

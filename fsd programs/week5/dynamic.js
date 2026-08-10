const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express.js</h1>');
});


app.get('/about', (req, res) => {
    res.send('This is a demo of Route Parameters and Query Parameters.');
});

app.get('/student/:id', (req, res) => {

    const id = req.params.id;

    res.send(`
        <h2>Student Details</h2>
        <p>Student ID: ${id}</p>
    `);
});


app.get('/student/:id/:name', (req, res) => {

    const id = req.params.id;
    const name = req.params.name;

    res.send(`
        <h2>Student Information</h2>
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
    `);
});


app.get('/search', (req, res) => {

    const course = req.query.course;
    const trainer = req.query.trainer;

    res.send(`
        <h2>Search Result</h2>
        <p>Course: ${course}</p>
        <p>Trainer: ${trainer}</p>
    `);
});


app.get('/product/:id', (req, res) => {

    const id = req.params.id;
    const color = req.query.color;
    const size = req.query.size;

    res.json({
        productId: id,
        color: color,
        size: size
    });
});


app.get('/api/status', (req, res) => {
    res.json({
        status: "Running",
        version: "1.0.0",
        message: "Express Server is Working!"
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Display student form
app.get('/', (req, res) => {
    res.render('student', {
        error: null,
        user: null
    });
});

// Handle registration
app.post('/register', (req, res) => {

    const username = req.body.username;
    const age = req.body.age;

    // Validation
    if (!username || !age) {
        return res.render('student', {
            error: 'Username and Age are required',
            user: null
        });
    }

    if (age < 18) {
        return res.render('student', {
            error: 'Age must be 18 or above',
            user: null
        });
    }

    // Successful registration
    res.render('student', {
        error: null,
        user: {
            username: username,
            age: age
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
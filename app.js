const express = require("express");
const app = express();

const studentData = require("./studentData.json");



app.get("/", (req, res) => {
    res.status(200).json({ data: "Service is running. Health check route working!" });
});

// Index
app.get("/students", (req, res) => {
    
    try {
        const {students} = studentData;

        res.status(200).json({ data: students });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

// Show
app.get("/students/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { students } = studentData;
        const student = students.find(student => student.id === id);

        if (student) {
            res.status(200).json({ data: student });
        } else {
            res.json({ error: "No student found with id of " + id })
        }
    } catch(err) {
        res.status(500).json({ error: err });
    }
});


module.exports = app;
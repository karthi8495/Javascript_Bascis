const express = require('express');
const app = express();
const PORT = 3000;


function displayName(name) {
    return `Hello ${name}`;
}

function displayAge(age) {
    return `Your age is ${age}`;
}

app.get("/", (req,res) => {
    res.send(displayName("John"));
});

app.get("/about", (req,res) => {
    res.send("This is about Page");
});

app.get("/age", (req,res) => {
    res.send(displayAge(23));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
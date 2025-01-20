const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

let projects = [];
try {
    const data = fs.readFileSync('./data/projects.json', 'utf-8');
    projects = JSON.parse(data)
}
catch (error) {
    console.error('reading file error', error.message);
}

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'About me' });
});
app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects', projects });
});
app.get('/contacts', (req, res) => {
    res.render('contacts', { title: 'Contacts' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});




const noteData = require('../db/db.json');
const router = require('express').Router()
const uniqid = require('uniqid');
const fs = require('fs');
const { notDeepEqual } = require('assert');


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
});

router.post('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        let dbData = JSON.parse(data);
        if (err) throw err;
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
            id: uniqid()
        }
        dbData.push(newNote)
        fs.writeFile('./db/db.json', JSON.stringify(dbData), (err) => {
            err ? console.error(error) : console.log("updating database")
            res.json(dbData)
        })

    });
})

router.delete(`/api/notes/:id`, (req, res) => {
    const noteId = req.params.id;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let dbData = JSON.parse(data)
        for (let i = 0; i < dbData.length; i++) {
            if (noteId === dbData[i].id) {
                dbData.splice([i], 1)
                fs.writeFile('./db/db.json', JSON.stringify(dbData), (err) => {
                    if (err) throw err;
                    res.json(dbData)
                })
            }
        };
    })
});

    module.exports = router;

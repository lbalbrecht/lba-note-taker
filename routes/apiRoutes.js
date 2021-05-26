const noteData = require('../db/db.json')
const app = require('../server')

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    })

    app.delete(`/api/notes/:id`, (req, res) => {
        noteData.splice(req.params.id, 1);
        res.json(true);
    })
}
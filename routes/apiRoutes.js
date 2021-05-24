const noteData = require('../db/db.json')
const app = require('../server')

module.exports = (app) => {
    app.get('/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
    })

    app.delete(`/api/notes/:id`, (req, res) => {
        noteData.splice(req.body.id, 1);
    })
}
const express = require('express');
const router = require('./routes/apiRoutes')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})

module.exports = app;
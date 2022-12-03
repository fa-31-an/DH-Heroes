const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Holi')
})

app.listen(3030, () => {
    console.log('The server is ON at the port 3030')
});

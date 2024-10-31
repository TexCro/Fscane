const express = require('express');
const app = express();

app.use(express.json());

app.post('/logged.js', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
    console.log(`Server Running`);
});

const express = require('express');
const app = express();

app.use(express.json());

app.post('/logged.js', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received successfully' });
});

app.get('/logged.js', (req, res) => {
    const data = {
        tableData: [
            { Current: 'Value1', Grower: 'Grower1', Pollen: 'Pollen1', Seed: 'Seed1' },
            { Current: 'Value2', Grower: 'Grower2', Pollen: 'Pollen2', Seed: 'Seed2' }
        ]
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server Running`);
});

import express from 'express';

import apiRoute from './routes/index.js';

const PORT = 4000

const app = express();

app.get('/echo/:text', (req, res) => res.send(req.params.text));

app.use('/api/v1', apiRoute)

app.listen(PORT, () => console.log("App"))
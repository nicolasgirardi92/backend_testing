import express from 'express';

import apiRoutes from './routes/apiRoutes';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
    res.json({ message: 'API is running' });
});

export default app;
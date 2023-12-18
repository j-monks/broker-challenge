import express from 'express';
import { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

// Start server
const server = app.listen(3000, () => {
 console.log('Server is running on port 3000');
});

export default server;
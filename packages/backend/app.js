import express from 'express';
import { json } from 'express';
import policyRoutes from './routes/policyRoutes.js';
import db from './models/index.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());
// Use routes
app.use('/api/policies', policyRoutes);

// Sync Sequelize models after establishing the connection
db.sequelize
  .sync()
  .then(() => {
    console.log('Sequelize models synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing Sequelize models:', error);
  });

// Start server
const server = app.listen(3000, () => {
 console.log('Server is running on port 3000');
});

export default server;
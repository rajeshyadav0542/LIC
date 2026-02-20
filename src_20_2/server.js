const app = require('./app');
const db = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 8001;
const DB_NAME = process.env.DB_NAME || 8000;


// { force: true }
// { alter: true }
db.sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.error('Error syncing database:', error));

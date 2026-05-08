import dotenv from 'dotenv';
dotenv.config({ quiet: 'true' });

import connection from './database/connect.js';
import app from './app.js';

connection().then(() => {
    app.listen(8000, () => {
        console.log('---------------->Connection established')
    })
}).catch((error) => {
    console.log(error)
})
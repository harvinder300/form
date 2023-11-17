// server.js
import axios from 'axios'; // Import axios for making HTTP requests

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/insertConnection', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'NewDigiseva',
    });

    await connection.execute('INSERT INTO REQUEST () VALUES ()');


    console.log('New connection record inserted successfully');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error inserting new connection record', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

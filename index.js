const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();

const app = express();
app.use(cors());
app.use(express.json());

const db =  pgp({
    host: 'localhost',
    port: '5432',
    database: 'shoes',
    user: 'postgres',
    password: '1234'
});
app.get('/shoes', async (req, res) => {
  try {
      const { category, sort } = req.query;

      let query = 'SELECT * FROM shoes';
      let values = [];

      if (category) {
          query += ' WHERE category = ANY($1)';
          values.push([parseInt(category)]);
      }

      if (sort) {
          switch (sort) {
              case 'популярности':
                  query += ' ORDER BY rating DESC';
                  break;
              case 'цене':
                  query += ' ORDER BY price ASC';
                  break;
              case 'алфавиту':
                  query += ' ORDER BY title ASC';
                  break;
              default:
                  break;
          }
      }

      const shoes = await db.any(query, values);
      res.json(shoes);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
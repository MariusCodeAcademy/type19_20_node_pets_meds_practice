const express = require('express');
const { dbQueryWithData } = require('../../helper');

const petsRouter = express.Router();

const tableName = 'pets';

// GET /v1/api/pets - grazina visus gyvunus
petsRouter.get('/pets', async (req, res) => {
  // parsiusti ir grazinti gyvunus is db
  const sql = `SELECT * FROM ${tableName} WHERE isArchived=0`;
  const [petsArr, error] = await dbQueryWithData(sql);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }

  res.json(petsArr);
});

// POST /v1/api/pets įrašo vieną augintinį į 'pets' db;

// DELETE /v1/api/pets/3 pakoreguoja augintinį pagal ID, kuriam 'isArchived' tampa '1' (t.y. true).

module.exports = petsRouter;

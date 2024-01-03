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
petsRouter.post('/pets', async (req, res) => {
  const { name, dob, clientEmail } = req.body;
  const argArr = [name, dob, clientEmail];

  // TODO: validation joi
  const sql = `INSERT INTO ${tableName} (name, dob, client_email) VALUES (?,?,?)`;

  const [insertResultObj, error] = await dbQueryWithData(sql, argArr);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }
  if (insertResultObj.affectedRows === 1) {
    res.status(201).json('Success');
    return;
  }

  res.status(400).json('no rows affected');
});

// DELETE /v1/api/pets/3 pakoreguoja augintinį pagal ID, kuriam 'isArchived' tampa '1' (t.y. true).
petsRouter.delete('/pets/:id', async (req, res) => {
  const { id } = req.params;
  const sql = `UPDATE ${tableName} SET isArchived=1 WHERE pet_id=? LIMIT 1`;
  const [updateResultObj, error] = await dbQueryWithData(sql, [id]);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }
  if (updateResultObj.affectedRows === 1) {
    res.status(200).json({ message: `pet with id ${id} was deleted` });
    return;
  }

  res.status(400).json('no rows affected');
});

module.exports = petsRouter;

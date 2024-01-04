// GET/POST - /v1/logs/

// POST įrašys naują įrašą į 'logs' db.

const express = require('express');
const { dbQueryWithData } = require('../../helper');

const logsRouter = express.Router();

// routes
logsRouter.get('/logs/petId/:petId', async (req, res) => {
  const { petId } = req.params;
  // const sql = 'SELECT * FROM `logs` WHERE pet_id = ?';
  const sql = `
  SELECT logs.log_id, logs.description, logs.status, pets.name, pets.dob
  FROM logs 
  JOIN pets
  ON logs.pet_id=pets.pet_id
  WHERE logs.pet_id = ?
  `;
  const [logsArr, error] = await dbQueryWithData(sql, [petId]);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }

  res.json(logsArr);
});

// POST įrašys naują įrašą į 'logs' db.

module.exports = logsRouter;

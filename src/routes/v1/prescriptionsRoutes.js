const express = require('express');

const { dbQueryWithData } = require('../../helper');

const prescriptionsRouter = express.Router();
// GET/POST - /v1/prescriptions/

// GET paims vieno augintinio visus įrašus iš 'prescriptions'
// db ir apjungs juos su pets ir med lentelėmis.
prescriptionsRouter.get('/prescriptions/petId/:petId', async (req, res) => {
  const { petId } = req.params;
  const sql = `
  SELECT prescriptions.prescription_id, prescriptions.comment, prescriptions.timestamp, pets.name, medications.name
  FROM prescriptions
  JOIN pets
  ON pets.pet_id=prescriptions.pet_id
  JOIN medications
  ON medications.medication_id=prescriptions.medication_id
  WHERE pets.pet_id = ?
  `;

  const [prescriptionsArr, error] = await dbQueryWithData(sql, [petId]);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }

  res.json(prescriptionsArr);
});

// POST įrašys naują įrašą į 'prescriptions' db.

module.exports = prescriptionsRouter;

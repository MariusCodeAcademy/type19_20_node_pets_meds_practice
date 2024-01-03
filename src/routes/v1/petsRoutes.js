const express = require('express');

const petsRouter = express.Router();

// GET /v1/api/pets - grazina visus gyvunus
petsRouter.get('/pets', async (req, res) => {
  // parsiusti ir grazinti gyvunus is db
  res.json('grazina visus gyvunus');
});

// POST /v1/api/pets įrašo vieną augintinį į 'pets' db;

// DELETE /v1/api/pets/3 pakoreguoja augintinį pagal ID, kuriam 'isArchived' tampa '1' (t.y. true).

module.exports = petsRouter;

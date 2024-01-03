// create router

// /v1/api/meds/
// GET paduos visus vaistus iš 'medications' db;
// POST įrašys vieną vaistą į 'medications' db.

const express = require('express');
const { dbQueryWithData } = require('../../helper');

const medsRouter = express.Router();
const tableName = 'medications';

// routes
medsRouter.get('/meds', async (req, res) => {
  const sql = `SELECT * FROM ${tableName}`;
  const [medsArr, error] = await dbQueryWithData(sql);

  if (error) {
    console.log('error ===', error);
    res.status(500).json('Server error');
    return;
  }

  res.json(medsArr);
});

// POST įrašys vieną vaistą į 'medications' db.
// TODO:

module.exports = medsRouter;

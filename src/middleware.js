const Joi = require('joi');

function errorDetails(errorsArr) {}

async function checkPetBody(req, res, next) {
  // aprasom koks bus musu objektas
  const petSchema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    dob: Joi.date().required(),
    clientEmail: Joi.string().email({ minDomainSegments: 2 }).required(),
  });

  // testuojam ar attitinka objektas musu schema
  try {
    const validatonResult = await petSchema.validateAsync(req.body, {
      // rodyti visas klaidas
      abortEarly: false,
    });
    console.log('validatonResult ===', validatonResult);
    next();
  } catch (error) {
    console.log('error checkPetBody ===', error);
    // parasyti funkcija errorDetails(error)
    // grazina masyva kuriame yra objektas { field: name, err: "required field"}
    res.status(400).json(error);
  }
}

async function checkMedsBody(req, res, next) {
  // tikrina meds laukus ar geri atsiusti
}
async function checkLogsBody(req, res, next) {
  // tikrina logs laukus ar geri atsiusti
}

module.exports = {
  checkPetBody,
  checkMedsBody,
};

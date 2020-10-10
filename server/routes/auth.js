const express = require('express');
const bcrypt = require('bcryptjs');
const { pool } = require('../db/connect');

const {
  validateUser,
  isInvalidField,
  generateAuthToken
} = require('../utils/common');
const authMiddleware = require('../middleware/auth');


const Router = express.Router();

Router.post('/signup', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const validFieldsToUpdate = [
      'first_name',
      'last_name',
      'email',
      'password'
    ];
    const recievedFields = Object.keys(req.body);

    const isInvalidFieldProvided = isInvalidField(
      recievedFields,
      validFieldsToUpdate
    );

    if (isInvalidFieldProvided) {
      return res.status(400).send
    }
  }
})
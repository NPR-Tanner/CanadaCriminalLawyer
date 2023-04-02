const express = require('express');
const {findUserByEmail, createNewUser} = require('../models/user');
const {authentication, random} = require('../middlewares/helpers');

export const register = async(req, res) => {
  try {
    const { email, password } = req.body;

    // Check to see if any of these fields are missing
    if (!email || !password) {
      return res.sendStatus(400);
    }
    
    // Check for existing user
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createNewUser({
      first_name,
      last_name,
      province, 
      city,
      email,
      phone_number,
      user_type,
      authentication: {
        salt,
        password: authentication(salt, password),
      }
    });

    return res.status(200).json(user).end();

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await findUserByEmail(email).select('+authentication.salt +authentication.password');

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);
    
    if (user.authentication.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('ANTONIO-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
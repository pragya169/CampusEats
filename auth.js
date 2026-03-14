const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const USERS_FILE = path.join(__dirname, 'users.json');

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Signup route
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  let users = readUsers();

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ email, password });
  writeUsers(users);
  res.status(201).json({ message: 'Signup successful' });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  let users = readUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;

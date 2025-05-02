
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    await db.execute(sql, [email, hashedPassword]);
    res.json({ message: 'User registered' });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, rows[0].password);
    if (!match) return res.status(401).json({ error: 'Incorrect password' });

    const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
};

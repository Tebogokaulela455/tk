
const db = require('../config/db');

exports.getUserDetails = async (req, res) => {
    const userId = req.params.id;
    const [rows] = await db.execute('SELECT id, email FROM users WHERE id = ?', [userId]);
    res.json(rows[0]);
};

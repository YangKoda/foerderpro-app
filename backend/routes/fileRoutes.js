const express = require('express');
const router = express.Router();

// File upload placeholder route
router.get('/', (req, res) => {
    res.json({ message: 'File routes are working!' });
});

module.exports = router;

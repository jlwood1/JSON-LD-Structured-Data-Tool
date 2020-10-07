/**
 * Required External Modules
 */
const express = require('express'); 
const path = require('path');

/**
 * App Variables
 */
const app = express(); 
const port = process.env.PORT || 3000; 

/**
 *  App Configuration
 */
app.listen(port, () => console.log('Listening on port ${port}')) 

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'public')));
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
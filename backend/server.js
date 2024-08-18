const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todoRoutes'); // Corrected path

const app = express();

app.use(cors());
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;
const ORIGIN = process.env.ORIGIN || 'http://localhost:5005';


app.use('/api/todos', todoRoutes);

// const PORT = process.env.PORT || 5005;

 mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5005, () => console.log("App listening on port 5005"));
    })
    .catch((err) => console.log(err));

    module.exports = app;
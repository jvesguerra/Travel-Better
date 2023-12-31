/* eslint-disable linebreak-style */
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
// const express = import('express');
const morgan = require('morgan');
const app = express();

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB CONNECTION ERROR: ', err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev' ));

// route middlewares
app.use('/api', authRoutes);

app.listen(8000, () => console.log('Server running on port 8000'));

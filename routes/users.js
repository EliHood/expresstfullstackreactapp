import express from 'express';
import knex from '../db/knex';
const users = express();


users.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Users'
    });
})



export default users;
import express from 'express';
import knex from '../db/knex';
const users = express();


users.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Users'
    });
})

users.get('/users', (req, res) => {
    return knex('users')
        .then( (users) => {
            res.json({
                users: users
            })
        });
})



export default users;
import express from 'express';

const users = express();


users.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Users'
    });
})



export default users;
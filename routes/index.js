import express from 'express';

const router = express();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Helo World'
    });
})

router.get('/404', (req, res) => {
    res.status(400).json({
        message: '404 error'
   })
})


export default router;
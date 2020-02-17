const Test = require('../models/Test');
import express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    Test.query()
        .select()
        .then((data: JSON) => {
            res.json(data);
        })
})

module.exports.router = router;

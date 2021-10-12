import { Router } from "express";

import db from '../db.js';
console.log('...', db)

const route = new Router()

route.get('/', (req, res) => {
    console.log("Get all")
    res.json(db.data.email);
})

route.post('/:address', (req, res) => {
    const { address } = req.params;
    console.log("Add", address)
    if (!db.data.email.includes(address)) {
        db.data.email.push(address)
    } else {
        return res.sendStatus(400)
    }
    return res.sendStatus(200)
})

export default route;
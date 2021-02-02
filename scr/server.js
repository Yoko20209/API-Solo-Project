const express = require("express");
const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const path = require('path');

function setupServer() {
    const app = express();
    app.use(express.json());

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    })

    app.get("/gemstones", async (_, res) => {

        const data = await knex.select().table('gemstones');
        res.status(200)
        res.send(data);
    });

    app.post("/gemstones/:stone/:color", async (req, res) => {
        console.log(req.params)
        const a = await knex('gemstones').insert(req.params)
        const data = await knex.select().table('gemstones');
        res.send(data).status(200);
    })

    app.delete("/gemstones/:stone", async (req, res) => {
        //TODO serial keeps going up
        await knex('gemstones').where(req.params).del();
        const data = await knex.select().table('gemstones')
        res.send(data).status(200)
    })

    app.patch("/gemstones/:stone/:color", async (req, res) => {
        console.log('stone, colo')

        const { stone, color } = req.params;
        await knex('gemstones').where({ stone: stone }).update({ color: color })
        const data = await knex.select().table('gemstones')
        res.send(data).status(200)
    })

    return app;
}

module.exports = setupServer;
import express from "express";

import bodyParser from "body-parser";

import route from "./src/routes/index.route"

import {ConnectDatabase} from "./src/configs/connectDatabase";

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.set('views', './views');

app.use(express.static( 'public'));

app.use(bodyParser.json());

ConnectDatabase.connect();

route(app);

app.listen(PORT, () => {

    console.log("App running on port: " + PORT)

})
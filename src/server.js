import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();


//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = 8080;    

const router = express.Router();


router.get('/', function(req, res) {
    res.json({ message: 'sample api' });   
});



// Grab all of the route files and create their base path
// ex product.js will have a /product route created that its routes are appended to
let routes = {};

fs.readdirSync(`${__dirname}/api`).forEach( file => {
	let fileName = file.split('.')[0];
	routes[fileName] = require(`./api/${file}`);
	app.use(`/${fileName}`, routes[fileName]);
});

app.use(express.static('public'));

app.listen(port);

console.log(`Listening on port ${port}`);


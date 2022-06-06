require('dotenv').config();
const express = require('express');
const router = require('./routers/index.js');
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload({}));
app.use('/', router);

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

start();
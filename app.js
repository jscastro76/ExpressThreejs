const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
	//__dirname : It will resolve to your project folder.
});

app.use('/models', express.static('models')) // add this!
app.use('/express', express.static('express')) // add this!
express.static.mime.define({ 'application/octet-stream': ['amf'] })
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser");
app.use(bodyParser.json(type="application/json"))

const mysql = require('mysql')
const connection = mysql.createConnection({
	host: "database-2-instance-1.cakkh9xywn4d.us-east-2.rds.amazonaws.com",
	user: "admin",
	password: "ookay123",
	database: "finance",
	multipleStatements: true
})

app.set('view engine', 'pug')


connection.connect(err => {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
})

app.get('/', (req, res) => {
	// get all records
	connection.query('SELECT * FROM trs; SELECT ROUND(SUM(debit), 2), ROUND(SUM(credit), 2) FROM trs', (err, results, fields) => {
		if (err) throw err
		res.render('index', {title: "TxHistory", data: results}) 
	})
})

app.get('/sort', (req, res) => {
	if (!req.query.field) res.sendStatus(400);
	connection.query('SELECT * FROM trs ORDER BY ? ASC', req.query.field, (err, results, fields) => {
		res.send(results);
	});
});


app.post("/add", (req, res) => {
	const jsonData = req.body
	if (!jsonData.credit && !jsonData.debit) res.sendStatus(400)
	if (jsonData.credit && jsonData.debit) res.sendStatus(400)
	if (!jsonData.date) res.sendStatus(400)
	if (!jsonData.descr) res.sendStatus(400)

	// reqd: debit or credit, date and descr
	if (jsonData.debit) {
		connection.query("INSERT INTO trs (debit, date, descr) VALUES (?, ?, ?)", [jsonData.debit, jsonData.date, jsonData.descr], (err, results, fields) => {
			if (err) throw err
			res.send(results)
		});

	} else if (jsonData.credit) {
		res.send("You sent a credit transaction")

	} else {
		res.sendStatus(400)
	}
});



app.get('/search', (req, res) => {
	if (req.query.likeId) {
		connection.query('SELECT * FROM trs WHERE id = ?', req.query.likeId, (err, results) => {
			if (results.length == 1) {
				let words = results[0].descr.split(" ");
				let wordIndex = (req.query.index) ? req.query.index : 0;
				let searchWord = words[wordIndex]	
				let searchStr = "%" + searchWord + "%";
				connection.query('SELECT * FROM trs WHERE descr LIKE ?; SELECT ROUND(SUM(debit), 2), ROUND(SUM(credit), 2) FROM trs WHERE descr LIKE ?', [searchStr, searchStr], (err, results, fields) => {
					res.render('search', {title: "TxHistory: " + searchWord, data: results, searchTerm: words[wordIndex]})
				})
			}
		})
	} else {
		res.sendStatus(400)
	}
});
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

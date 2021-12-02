const express = require('express')
const app = express()
const port = 3000

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
		res.render('index', {title: "Home page", data: results}) 
	})
})

app.get('/search', (req, res) => {
	if (req.query.likeId) {
		connection.query('SELECT * FROM trs WHERE id = ?', req.query.likeId, (err, results) => {
			if (results.length == 1) {
				let words = results[0].descr.split(" ");
				let wordIndex = (req.query.index) ? req.query.index : 0;
				
				let searchStr = "%" + words[wordIndex] + "%";
				connection.query('SELECT * FROM trs WHERE descr LIKE ?; SELECT ROUND(SUM(debit), 2), ROUND(SUM(credit), 2) FROM trs WHERE descr LIKE ?', [searchStr, searchStr], (err, results, fields) => {
					res.render('search', {title: "Search results", data: results, searchTerm: words[wordIndex]})
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

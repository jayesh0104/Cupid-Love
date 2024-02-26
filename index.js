const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const path = require('path');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use the body-parser middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the mydatabase database
// const con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "Babaramdev@15",
//   database: "mydatabase"
// });

// // Serve static files from the root directory
// app.use(express.static('./'));

// // Define the route for the contact form
// app.post('/contact', function(req, res) {
//   // Get the form data from the request body
//   console.log("data recieved");
//   const name = req.body.name;
//   const email = req.body.email;
//   const subject = req.body.subject;
//   const message = req.body.message;

//   // Insert the form data into the contacts table
//   const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
//   con.query(sql, [name, email, subject, message], function(err, result) {
//     if (err) throw err;
//     console.log("Form data was inserted successfully.");
//   });

//   // Send a response to the client
//   res.send('Form data was received successfully.');
// });

// Define the root route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services-page", (req, res) => {
  res.render("wedding");
});

// Start the server
app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on port 3000...');
});

const express = require("express"); 
const mysql = require('mysql');
const cors = require('cors');

const app = express(); 
app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "signup"
});

// // Check if the connection is successful
// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed: ", err.stack);
//         return;
//     }else{
//         console.log("Connected to the database.");
//     }
// });

// app.post('/LoginSignup', (req, res) => {
//     // Define the values array before logging
//     const values = [
//         req.body.name, 
//         req.body.email,
//         req.body.password
//     ];
    
//     // Use a parameterized query
//     const sql = "INSERT INTO `login` (`name`, `email`, `password`) VALUES (?, ?, ?)";
    
//     console.log("SQL Query:", sql);
//     console.log("Values:", values);  // Log the values

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.error("Error executing query:", err.message);
//             return res.status(500).json({ error: "Database error: " + err.message });
//         }
//         return res.status(200).json({ message: "User added successfully", data }); 
//     });
// });

app.get("/api", (req, res) => {
    return res.json({message: "This is from backend"})
})

app.listen(3300, () => {
    console.log("Server listening on port 3300"); 
});

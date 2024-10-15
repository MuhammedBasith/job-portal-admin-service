const express = require('express');
const router = express.Router();
const axios = require("axios")

// all applicants under a job

// Middleware to attach the db connection to the request
module.exports = (db) => {
    // Get all jobs
    router.get('/', (req, res) => {
        const sql = 'SELECT * FROM jobs';
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send({ error: err.message });
            res.send(result);
        });
    });

    // Add a new job
    router.post('/', (req, res) => {
        const { name, role, company } = req.body; // Adjusted to match your previous schema

        const sql = `INSERT INTO jobs (name, role, company, application_count) 
                     VALUES (?, ?, ?, ?)`;

        const values = [name, role, company, 0]; // Added default application_count

        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).send({ error: err.message });
            res.status(201).send('Job added successfully!');
        });
    });

    router.post('/apply', (req, res) => {
        const jobId = req.body.jobId;


        // SQL query to increment the application count for the job
        const sql = `UPDATE jobs SET application_count = application_count + 1 WHERE idjobs = ?`;

        db.query(sql, [jobId], (error, results) => {
            if (error) {
                return res.status(500).json({ message: 'Error updating application count', error });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.status(200).json({ message: 'Application count updated successfully' });
        });
    });


    router.get("/:jobId/applicants", async (req, res) => {

        try{
            const jobId = req.params.jobId;
            const applicants = await axios.get(`http://localhost:3001/users/${jobId}/getAllApplicants`)
            const data = await applicants.data
            res.status(200).json(data)

        }catch(err){
            res.status(500).json(err.message)
        }

    })

    return router;
};



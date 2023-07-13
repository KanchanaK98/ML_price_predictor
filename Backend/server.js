const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const fs = require('fs');
const pickle = require('pickle');
const { PythonShell } = require('python-shell');



app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 8070;


app.post('/predict', (req, res) => {
    const inputData = [16, 1.3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0];

    const options = {
        pythonPath: 'C:\\Python310\\python.exe', // Specify the path to your Python executable if needed
        scriptPath: './', // Specify the path to your Python script
        args: JSON.stringify(inputData)
    };
    try
    {
        console.log("Start try block ....")
        PythonShell.run('prediction.py', options, (err, result) => {
            console.log("start 2 .....")
            if (err) {
                console.log("errrrrrrrrrrrrrrrrrrrrrrrr");
                console.log(err);
                res.status(500).send('Error occurred during prediction');
                return;
            }
    
            const prediction = JSON.parse(result);
            res.json({ prediction });
            console.log("Prediction : "+prediction)
        });

    }catch(e)
    {
        console.log("catch block : "+e);
    }
   
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
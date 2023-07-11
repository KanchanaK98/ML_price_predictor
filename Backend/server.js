const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const fs = require('fs');
const pickle = require('pickle');



app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 8070;

// Define your API endpoint(s)
app.post('/predict', (req, res) => {
    const datas = [8, 1.3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
    fs.readFile('predictor.pickle', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error loading model');
            return;
        }

        const model = pickle.loads(data);

        // Get the input data from the request body
        // const inputData = req.body.data;
        const inputData = datas

        // Perform prediction using the loaded model
        const prediction = model.predict([inputData]);

        // Return the prediction result as the response
        res.json({ prediction });
        console.log(prediction)
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
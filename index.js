const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


app.use(cors());


app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data || [];
        const numbers = [];
        const alphabets = [];
        let highestLowercase = '';

        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (/^[A-Za-z]$/.test(item)) {
                alphabets.push(item);
                if (item === item.toLowerCase()) {
                    if (!highestLowercase || item > highestLowercase) {
                        highestLowercase = item;
                    }
                }
            }
        });

        res.json({
            is_success: true,
            user_id: "Kartikey_Bhatnagar_20112002",  // These are your hardcoded values
            email: "kartikey.bhatnagar2021@vitstudent.ac.in",         
            roll_number: "21BCT0245",        
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        });
    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
});


app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);


const app = express();

app.use(cors());
app.use(express.json());

const port = 3080;

app.post('/', async(req,res) => {
    const {form} = req.body;
    let response;
    try {
        response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${form}`,
            max_tokens: 64,
            temperature: 1,
            top_p: 1,
            n: 1,
        });

        res.json({
            data : response.data.choices[0].text
        })

    } catch (error) {
        console.log(error);
        response = 'Erooor try again later'

        res.json({
            data : response
        })
    }
})

app.listen(port, ()=>{
    console.log('app started');
})
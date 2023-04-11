const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);


const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors());


app.post('/', async(req,res) => {
    const {form} = req.body;
    let response;
    try {
        response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[
                {role:"user",content:`Consider yourself as an mental health assistant and answer the following question : ${form}`}
            ],
            max_tokens: 150,
            temperature: 0.1,
            top_p:1.0,
            frequency_penalty:1,
            presence_penalty:1
        });
        res.json({
            data : response.data.choices[0].message.content
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
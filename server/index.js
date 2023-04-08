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
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port = 3080;

app.post('/', async(req,res) => {
    const {prompt} = req.body;
    // console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 64,
        temperature: 1,
        top_p: 1,
        n: 1,
        // stream: false,
        // logprobs: null,
        // stop: "\n",
    });
    console.log(response.data.choices[0].text);
    res.json({
        data : response.data.choices[0].text
    })
})

app.listen(port, ()=>{
    console.log('app started');
})
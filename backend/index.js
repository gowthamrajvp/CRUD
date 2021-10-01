import express from 'express';
import mongoose from 'mongoose';
import route from './route/route.js';
import cors from 'cors';
import bodyParser from  'body-parser';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/users',route);

if (process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
         res.sendFile(path.resolve(__dirname,"client","build","index.html")) 
    })
}

const port = process.env.PORT || 8080;
const URL = 'mongodb+srv://user:user123@crudd.fnvw6.mongodb.net/CRUDAPP?retryWrites=true&w=majority';
mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    app.listen(port,() =>{
        console.log(`Successfully connectted port:${port}`);
   });
}).catch(error=>{
    console.log('Error',error.message);

})


const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
const History=require('./models/history')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = process.env.PORT || 3001;
//app.use(cors())
var database;
try {
    mongoose.connect('mongodb://127.0.0.1:27017/TestAssignment').then(()=>console.log("Connected"));
    database=mongoose.connection;
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}

// const schema = new mongoose.Schema({ address: String, date: Date });
// const History = mongoose.model('History', schema);


app.get('/getHistory',async (req, res)=> {
    const adds= await History.find({})
    res.status(200).json(adds)
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.post('/addHistory',async (req, res)=> {
    const add= await History.create(req.body)
    res.status(200).json(add)
})

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
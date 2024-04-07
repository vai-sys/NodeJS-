const express = require('express');
const app = express();
const db=require('./db');
const person=require('./models/person');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Welcome,We would like to serve you');
});
// post route to add person

app.post('/person',async(req,res)=>{
  try{
    const data=req.body;
    const newPerson=new person(data);
    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
   }
   catch(err){
  console.log(err);
  res.status(500).json({err:'Internal Server Error'})
   }
})
 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

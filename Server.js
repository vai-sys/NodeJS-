// const express = require('express');
// const app = express();
// const db = require('./db'); 
// const Person = require('./models/person'); 
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Welcome To my hotel , How I can help you? ,We have list of menus'); 
// });

// app.post('/person',async(  req,res)=>{
//   try{
//     const data=req.body
//     const newPerson=new Person(data);
//     const response=await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//    console.log(err)
//    res.status(500).json({error:"Internal Server Error"})
//   }
 
 
// })
// app.get('/person',async(req,res)=>{
//   try{
//     const data=await Person.find();
//     console.log('data fetch');
//     res.status(200).json(response)
//   }
//   catch(err){
//     console.log(err)
//     res.status(500).json({error:"Internal Server Error"})

//   }
// })
 
// app.listen(3000,()=>{
//   console.log('Listening on port 3000');
// })
const express = require('express');
const app = express();
const db = require('./db'); 
const Person = require('./models/person'); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome To my hotel, How can I help you? We have a list of menus.'); 
});

app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('Data fetched');
    res.status(200).json(data); // Use 'data' instead of 'response'
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});





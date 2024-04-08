// const express = require('express');
// const app = express();
// const db=require('./db');
// const person=require('./models/person');
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());
// app.get('/', function (req, res) {
//   res.send('Welcome,We would like to serve you');
// });


// app.post('/person',async(req,res)=>{
//   try{
//     const data=req.body;
  
//     const newPerson = new person(data);
  
//     const response=await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//    }
//    catch(err){
//   console.log(err.message);
//   res.status(500).json({err:'Internal Server Error'});

//    }
// })


// const express = require('express');
// const app = express();
// const db = require('./db'); // Assuming this connects to your database
// const Person = require('./models/person'); // Assuming this is your Person model
// const bodyParser = require('body-parser');

// // Use a more robust error handling middleware for better user experience
// app.use(function (err, req, res, next) {
//   console.error(err.stack); // Log the error for debugging
//   res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
// });

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Welcome, We would like to serve you!'); // Consistent use of semicolons
// });

// app.post('/person', async (req, res) => {
//   try {
//     const { name, email, mobile, work } = req.body; // Destructuring for readability

//     // Validate required fields before creating a new Person instance
//     if (!name || !email || !mobile || !work) {
//       return res.status(400).json({ error: 'Missing required fields: name, email, mobile, work' });
//     }

//     const newPerson = new Person({ name, email, mobile, work });

//     const savedPerson = await newPerson.save();
//     console.log('Person saved:', savedPerson);
//     res.status(201).json(savedPerson); // Use 201 Created for successful creation
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// app.get('/person',async(req,res)=>{
//   try{
//     const data=Person.find();
//     console.log("data fetched");
//     res.status[200].json(data);
//   }
//   catch(err){
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal Server Error' });

//   }

// })

// // Start the server after defining routes for better organization
// const port = process.env.PORT || 3000; // Use environment variable for port
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


const express = require('express');
const app = express();
const db = require('./db'); // Assuming this connects to your database
const Person = require('./models/person'); // Assuming this is your Person model
const bodyParser = require('body-parser');

// Use a more robust error handling middleware for better user experience
app.use(function (err, req, res, next) {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome, We would like to serve you!'); // Consistent use of semicolons
});

app.post('/person', async (req, res) => {
  try {
    const { name, email, mobile, work } = req.body; // Destructuring for readability

    // Validate required fields before creating a new Person instance
    if (!name || !email || !mobile || !work) {
      return res.status(400).json({ error: 'Missing required fields: name, email, mobile, work' });
    }

    const newPerson = new Person({ name, email, mobile, work });

    const savedPerson = await newPerson.save();
    console.log('Person saved:', savedPerson);
    res.status(201).json(savedPerson); // Use 201 Created for successful creation
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server after defining routes for better organization
const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});






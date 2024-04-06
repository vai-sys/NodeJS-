const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/chicken', function(req, res) {
    res.send('I love chicken');
});

app.get('/idli',function(req,res){
    var customised_idli={
        name:'idli',
        is_sambhar:true,
        is_coconut_chutney:true
    }
    res.send(customised_idli);
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

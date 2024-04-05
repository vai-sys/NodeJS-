const fs = require('fs');
const os=require('os');
var user=os.userInfo();
console.log(user.username);
fs.appendFile('file.txt','welcome\t'+user.username+'!\n',()=>{console.log("file is open")});
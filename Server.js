const fs = require('fs');
var notes=require('./notes')
var _=require('lodash');
const os=require('os');
var user=os.userInfo();

var age=notes.age;
console.log( "age is"+age);

var result=notes.addNumber(2,4);
console.log(result);

console.log(user.username);

fs.appendFile('file.txt','welcome\t'+user.username+'!\n',()=>{console.log("file is open")});
const data=[1,1,22,3,4,5,5,6,11,11,34];
var filter=_.uniq(data);
console.log(filter);

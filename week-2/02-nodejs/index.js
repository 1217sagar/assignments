const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) => {
  let files = fs.readdir('./files', (err, files) => {
    if(err){
      throw new Error(err.message);
    }
		else{
  		console.log(files);
		  res.status(200).json({'files': files});
    	return;
		}
  })
	
	return;
})

app.get('/file/:filename', (req, res) => {
  let filename = req.params.filename;
	console.log(filename);
  fs.readFile(`./files/${filename}`, (err, data) => {
    if(err){
      res.status(404).send('File not found');
    }
    else{
      console.log(`${data.toString()}`);
      res.status(200).send(`${data.toString()}`);
    }
  })
})

let port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

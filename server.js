const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const filesRoute = require('./routes/filesRoute');
const showRoute = require('./routes/showRoute');
const downloadRoute = require('./routes/download');

app.use(express.json());
app.use(express.static(path.join(__dirname,"/public/build")))
app.use(express.static('public'));
app.use(cors());

app.set('views', path.join(__dirname,'/views'));
app.set("view engine", 'ejs')

const PORT = process.env.PORT || 3001;
connectDB();

app.use('/api/files', filesRoute);
app.use('/files', showRoute);
app.use('/files/download/', downloadRoute);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, "./public/build","index.html"));
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://vishesh:1@connect2@react-blog-mzhow.mongodb.net/<dbname>?retryWrites=true&w=majority",
{ useNewUrlParser: true } ).then(() => console.log("Database is connected...."))
                            .catch(err => console.error(err));
app.get('/', (req, res ) => {
    res.send("Hello vishesh welcome to the backend world.....")
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
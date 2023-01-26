const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(8080, () => {
    console.log(`server running on port 8080`);
})

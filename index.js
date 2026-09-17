const express = require('express');
const app = express();
const port = 3030;
const { 
    getHello,
    getKonyvek,
    getKonyvekById
} = require('./services/konyv_service');
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);
app.get("/konyvek/:id", getKonyvekById);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
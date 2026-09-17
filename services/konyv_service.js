const {
    konyvek
} = require('../database/konyvek_db');

const getHello = (req,res) => {
    res.json({ message: "konyvek backend!" });
};

const getKonyvek = (req,res) => {
    res.json(konyvek);
};

const getKonyvekById = (req,res) => {
    const simaid = Number(req.params.id);
    const konyv = konyvek.find(konyv => konyv.id === simaid);
    //const masik = req.params["id"];
    //const {id} = req.params;
    res.json(konyv);

}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvekById
}
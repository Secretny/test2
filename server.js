const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>Moja aplikacja na heroku - zmiana pliku</h1><h2>Szymon Migas gr II</h2>")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
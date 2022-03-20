const express = require("express");

const app = express();

app.use(express.json())

//users datası normalde databaseden gelir
const users = [
    { id: 1, name: "test1", surname: "test1", email: "test1@test.com" },
    { id: 2, name: "test2", surname: "test2", email: "test2@test.com" },
    { id: 3, name: "test3", surname: "test3", email: "test3@test.com" }

]

app.get('/', (req, res) => {
    res.send("Hello")
});

// tüm user dataları list etmek için
app.get('/api/users', (req, res) => {
    res.send(users)
});

// id'ye göre sadece tek bir user datasını çekmek için
app.get('/api/users/:id', (req, res) => {
    const user = users.find(data => data.id == parseInt(req.params.id))
    if (!user) res.status(404).send("Data bulunamadı")
    res.send(user)
});

// yeni user create etmek için
app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
    }
    users.push(user)
    res.send(user)
});


// server 300 portunda çalışıyor
app.listen(3000, () => {
    console.log("Listen port 3000")
});
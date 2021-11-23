
var express = require("express");
var morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001
var app = express(); app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
//...

app.post('/api/persons', (request, response) => {
    const newPerson = request.body

    if (phonebook.find(person => newPerson.name === person.name)) {
        response.json('Name already in phonebook')
        response.status(400)
    }
    else if (!newPerson.name) {
        response.json('No name')
        response.status(400)
    }
    else if (!newPerson.number) {
        response.json('No number')
        response.status(400)
    }
    else {
        phonebook.push(
            {
                ...newPerson,
                id: parseInt(Math.random() * 100000)
            }
        )
        response.json(newPerson)
    }
})


app.get("/api/persons", (req, res, next) => {
    res.json(phonebook)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.get("/info", (req, res, next) => {
    res.end(`Phonebook has info for ${phonebook} people \n\n\n ${new Date}`)
})

let phonebook = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

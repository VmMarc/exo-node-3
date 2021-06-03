const express = require('express')
const app = express()

const PORT = 3333
const IP_LOOPBACK = 'localhost'
//Message a la racine
app.get('/', (req, res) => {
  res.send('Welcome to Calculator, please go to "/calc"')
})
//Message d'usage dans "/calc"
app.get('/calc', (req, res) => {
  res.send('Operators you can use: add, sub, mul, div, mod.')
})
//Calculatrice
app.get('/calc/:operator/:op1/:op2', (req, res) => {
  const operator = req.params.operator
  const op1 = req.params.op1
  const op2 = req.params.op2

  //check que les deux input soit bien des nombres
  if (isNaN(op1) || isNaN(op2)) {
    // Correction: il fallait envoyé ca en JSON aussi
    res.send('Please use a number')
  } else {
    switch (operator) {
      case 'add':
        try {
          const resultAdd = {
            op: 'add',
            op1: Number(op1),
            op2: Number(op2),
            result: Number(op1) + Number(op2),
          }
          res.json(resultAdd)
        } catch (e) {
          res.send(e.message)
        }
        break
      case 'sub':
        try {
          const resultSub = {
            op: 'sub',
            op1: Number(op1),
            op2: Number(op2),
            result: Number(op1) - Number(op2),
          }
          res.json(resultSub)
        } catch (e) {
          res.send(e.message)
        }
        break
      case 'mul':
        try {
          const resultMul = {
            op: 'mul',
            op1: Number(op1),
            op2: Number(op2),
            result: Number(op1) * Number(op2),
          }
          res.json(resultMul)
        } catch (e) {
          res.send(e.message)
        }
        break
      case 'div':
        try {
          const resultDiv = {
            op: 'div',
            op1: Number(op1),
            op2: Number(op2),
            result: Number(op1) / Number(op2),
          }
          res.json(resultDiv)
        } catch (e) {
          res.send(e.message)
        }
        break
      case 'mod':
        try {
          const resultMod = {
            op: 'mod',
            op1: Number(op1),
            op2: Number(op2),
            result: Number(op1) % Number(op2),
          }
          res.json(resultMod)
        } catch (e) {
          res.send(e.message)
        }
        break
      default:
        res.send('Unknown operator') //Message d'erreur si l'operateur n'est pas bon
        break
    }
  }
})

app.listen(PORT, IP_LOOPBACK, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

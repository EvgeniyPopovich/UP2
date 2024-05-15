const PORT = 9001
const URLDB = 'mongodb://localhost:27017'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')
const User = require('./models/User')
const Calc = require('./models/Calc')

const app = express()

app.use(cors())
app.use(express.json())

const generateAccessToken =(id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login})
    if(!user){
        return res.status(400).json({message: 'Пользователь не найдет', i: 0})
    }
    if(user.password !== password){
        return res.status(400).json({message: 'Неверный логин или пароль', i: 0})
    }
    const token = generateAccessToken(user._id)
    res.json({
        message: 'Вы успешно авторизованы!',
        token: token,
        i: 1
    })
})
app.post('/addcalc', async (req, res) => {
    console.log(req.body)
    const {header, rate} = req.body
    const calc = new Calc({header, rate})
    await calc.save()
    res.json({
        message: 'Калькулятор успешно добавлен'
    })
})
app.get('/calcs', async (req, res) => {

      const calcs = await Calc.find()

    res.json({
        data: calcs
    })
})
app.post('/del', async (req, res) => {
    console.log(req.body)
    const {header} = req.body
    await Calc.findOneAndDelete({header: header})
    res.json({
        message: header
    })
})
const start = async() => {
    try{
        await mongoose.connect(URLDB, {authSource: "admin"})
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e){
        consoke.log(e)
    }
}

start()
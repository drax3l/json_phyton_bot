import express from 'express'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
const app = express()
const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)

app.get('/chatbot', (req, res) => {
    res.render('partials/bot');  // Cambia esto para buscar el archivo en partials
});
app.use(express.static(join(__dirname,'public')))

app.listen(3000)
console.log('Server esta siendo escuchado en el puerto ', 3000)


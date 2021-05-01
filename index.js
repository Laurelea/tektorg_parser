const express = require ("express")


const app = express()
const homeRoutes =  require("./routes/home")


//Зарегистрировали движок:
app.set('view engine', 'ejs');
//Указываем папку для хранения шаблонов:
app.set('views', 'www')
//Зарегистрировали папку:
app.use(express.static("public"));

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use("/",  homeRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


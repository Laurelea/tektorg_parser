const {Router} = require('express')
const router = Router()
const getTenders = require("../get_tenders")

router.get('/', async (req, res) => {
    try {
        const tenders = await getTenders.getTenders()
        // console.log("tenders.length", tenders.length)
        res.render('index', {
            title: "Current Tenders",
            tenders: tenders
        })
    } catch (e) {
        console.log(e)
    }
})

module.exports = router

const parser = require('./parser')

const okpd2s = ['20.59.52.192', '28.99.39.190', '25', '26']
// const okpd2s = ['20.59.52.192', '28.99.39.190']
const dateToViewFrom = '23.07' + '.2021'
const allTenders = []

async function start(url) {
    try {
        const ads = await parser.parserResult(url)
        allTenders.push(ads)
        // console.log("Search results: ", ads)
    } catch (e) {
        console.log(e)
    }
    // process.exit(0)
}

module.exports.getTenders = async function () {
    for (elem of okpd2s) {
        const okpd2 = elem
        const url = 'https://www.tektorg.ru/procedures?dpfrom=' + dateToViewFrom + '&okpd2=' + okpd2 + '&sort=relevance&order=desc&limit=500'
        console.log(url)
        await start(url)
    }
    console.log("allTenders: ", allTenders.length, "DONE!")
    return allTenders
}

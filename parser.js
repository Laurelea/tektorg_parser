const request = require('request')
const cheerio = require('cheerio')
const moment = require('moment')
const readline = require('readline')
const filter = require('./filter')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function askQuestion (question) {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            if (!answer || answer === 'y') {
                return resolve(true)
            }
            return resolve(false)
        });
    })
}

async function getPage(url) {
    return new Promise((resolve, reject) => {
        request({
            url:url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
            }
        }, (error, response, body) =>{
            if (error) {
                return reject(error)
            }
            return resolve(cheerio.load(body), {decodeEntities: false})

        })
    })
}

async function getInfoFromPage(url, page) {
    let result = []
    const $ = await getPage(url)
    // console.log('$ : ', $)
    const ads = $('.section-procurement__item-information').each((i, el) => {
        // console.log(i, el)
        result.push($(el))
    })
    // console.log("result: ", result)
    // console.log(`Page ${page}: found ${ads.length}`)
    const nextPage = $('a[data-cy="pagination__next"]')
    if (nextPage.get(0) && await askQuestion("Next page?")) {
        const nextAds = await getInfoFromPage(nextPage.attr('href'), ++page)
        result = result.concat(nextAds)
    }
    return result
}

async function run(url) {
    const result = []
    const ads = await getInfoFromPage(url, 1)
    // console.log(`Total found: ` + ads.length)

    for (const inf of ads) {
        const regExp = /(РН)?[0-9]+/
        // console.log(inf.find('a.section-procurement__item-title').text())
        //Тут обрабатываем title фильтром. И создаём элемент только с валидным тайтлом
        const title = inf.find('a.section-procurement__item-title').text()
        if (filter.filter(title)) {
            let offerData = {
                title,
                number: inf.find('.section-procurement__item-numbers span').text().trim().match(regExp)[0],
                href: 'https://www.tektorg.ru' + inf.find('a.section-procurement__item-title').attr('href')

            }

            // console.log(offerData.title, offerData.number, offerData.href)
            result.push(offerData)
        }
    }
    // console.log("result: ", result)

    return result
}



module.exports.parserResult = async function (url) {
    try {
        const result = []
        // const r = await getPage(url);
        // var a = 5;
        var ads = await run(url)
        // console.log("ads: ", ads)

        // const r = await askQuestion()
    } catch (e) {
        throw e
    }
    // console.log("this.ads", this.ads)
    return ads
}
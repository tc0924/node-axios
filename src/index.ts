import {Response} from "request";

const request = require('request')
const { JSDOM } = require('jsdom')

const url = 'https://sugotoku-yurugp.secureserv.jp/character/nameList.php';

request(url, (e: any, response: Response, body: any) => {
    if (e) {
        console.error(e)
    }

    try {
        const dom = new JSDOM(body)

        const characterNameDivs = [...(dom.window.document.querySelectorAll('.name'))];
        characterNameDivs.map((characterNameDiv:any) => {
            console.log(characterNameDiv.textContent)
        });
    } catch (e) {
        console.error(e)
    }
})

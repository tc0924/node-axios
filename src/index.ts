import {Response} from "request";
const request = require('request')
const {JSDOM} = require('jsdom')

export type Character = {
    name: string;
    url: string;
}

export const getCharacterList = () => {
    const url = 'https://sugotoku-yurugp.secureserv.jp/character/nameList.php';

    request(url, (e: any, response: Response, body: any) => {
        if (e) {
            console.error(e)
        }
        const characterList: Character[] = [];

        try {
            const dom = new JSDOM(body)

            // キャラクタの画像URLリスト
            const characterThumbDivs = [...(dom.window.document.querySelectorAll('.thumbnail'))];
            characterThumbDivs.map((characterThumbDiv: any) => {
                const imgSrcUrl = characterThumbDiv.children[0].src as string;
                const imgSrcName = characterThumbDiv.children[0].alt as string;
                characterList.push({
                    name: imgSrcName,
                    url: imgSrcUrl
                });
            });
            console.log(characterList);
        } catch (e) {
            console.error(e)
        }
    })
};

getCharacterList();



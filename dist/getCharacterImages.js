"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterImages = void 0;
const { JSDOM } = require('jsdom');
const axios = require('axios');
const fs = require('fs');
const getCharacters = async () => {
    const url = 'https://sugotoku-yurugp.secureserv.jp/character/nameList.php';
    const characterList = [];
    try {
        const res = await axios({
            method: "GET",
            url: url,
            responseType: 'document'
        });
        const dom = new JSDOM(res.data);
        const document = dom.window.document;
        // キャラクタの画像URLリスト
        const characterThumbDivs = [...(document.querySelectorAll('.thumbnail'))];
        characterThumbDivs.map((characterThumbDiv) => {
            const imgSrcUrl = characterThumbDiv.children[0].src;
            const imgSrcName = characterThumbDiv.children[0].alt;
            const regMatched = (imgSrcUrl.match(/\d+\.png/));
            const imgSrcFileName = regMatched ? regMatched[0] : imgSrcName;
            characterList.push({
                name: imgSrcName,
                url: imgSrcUrl,
                fileName: imgSrcFileName
            });
        });
    }
    catch (e) {
        console.log(e);
    }
    return characterList;
};
const saveImages = (characters) => {
    // map関数の中でasync awaitを使用して非同期実行する
    characters.map(async (character) => {
        const res = await axios({
            method: "GET",
            url: character.url,
            responseType: 'arraybuffer'
        });
        console.log(`Download ... name: ${character.name}, URL: ${character.url}, file name: ${character.fileName}`);
        fs.writeFileSync(`./assets/${character.fileName}`, Buffer.from(res.data), 'binary');
    });
};
const getCharacterImages = async () => {
    const characters = await getCharacters();
    saveImages(characters);
};
exports.getCharacterImages = getCharacterImages;
//# sourceMappingURL=getCharacterImages.js.map
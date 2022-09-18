"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCharacterImages_1 = require("./getCharacterImages");
const funcList = {
    getCharacterImages: true
};
if (funcList['getCharacterImages']) {
    (0, getCharacterImages_1.getCharacterImages)().then(() => console.log(`finished!`));
}
//# sourceMappingURL=index.js.map
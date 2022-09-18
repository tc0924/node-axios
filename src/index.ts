import { getCharacterImages } from "./getCharacterImages";

const funcList = {
  getCharacterImages: true
}

if (funcList['getCharacterImages']) {
  getCharacterImages().then(() => console.log(`finished!`));
}

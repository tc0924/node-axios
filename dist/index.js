"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
async function getData() {
    const url = 'https://random-data-api.com/api/v2/users?size=2&is_xml=true';
    try {
        const res = await axios.get(url);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}
getData();
//# sourceMappingURL=index.js.map
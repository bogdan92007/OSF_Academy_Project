const secretKey = '$2a$08$MvCyd3MqY2mSvrapEELFA.hIiF/vz5PFAj4LGMNjps7WZUPtQWBty';
const baseUrl = 'https://osf-digital-backend-academy.herokuapp.com/api/';
const axios = require('axios');

async function getCatalogItems(category) {
    let res = await axios.get(baseUrl + 'categories/parent/' + category + '?secretKey=' + secretKey);
    return res.data;
}

async function getRootCategories() {
    let res = await axios.get(baseUrl + '/categories?secretKey=' + secretKey);
    let mainCategories = [];
    for(let mainCategory of res.data) {
        if (mainCategory.parent_category_id === 'root') {
            mainCategories.push(mainCategory);
        }
    }
    return mainCategories;
}

module.exports = {getCatalogItems, getRootCategories};
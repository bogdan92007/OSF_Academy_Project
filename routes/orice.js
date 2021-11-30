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

async function wishlist(token) {
    const config = {
        headers: { Authorization: 'Bearer ' + token }
    };
    try {
        let res = await axios.get(baseUrl + '/wishlist' + '?secretKey=' + secretKey, config);
        return res.data;
    } catch (e) {
        return e;
    }
}

async function signup() {
    let res = await axios.get(baseUrl + '/auth/signup');
    return res.data;
}

async function login(payload) {
    payload.secretKey = secretKey;
    let res = await axios.post(baseUrl + '/auth/signin', payload);
    return res.data.token;
}

async function getProduct(productId) {
    let res = await axios.get(baseUrl + '/products/product_search?id=' + productId + "&secretKey=" + secretKey);
    return res.data;
}

async function getProducts(category) {
    let res = await axios.get(baseUrl + '/products/product_search?primary_category_id=' + category + "&secretKey=" + secretKey);
    return res.data;
}


module.exports = {getCatalogItems, getRootCategories, wishlist, login, signup, getProducts, getProduct};
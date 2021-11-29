const secretKey = '$2a$08$MvCyd3MqY2mSvrapEELFA.hIiF/vz5PFAj4LGMNjps7WZUPtQWBty';
const baseUrl = 'https://osf-digital-backend-academy.herokuapp.com/api/';
const axios = require('axios');

async function getOrders() {
    let res = await axios.get(baseUrl + '/orders' + '?secretKey=' + secretKey);
    return res.data;
}

module.exports = {getOrders};
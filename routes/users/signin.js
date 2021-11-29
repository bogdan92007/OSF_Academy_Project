const secretKey = '$2a$08$MvCyd3MqY2mSvrapEELFA.hIiF/vz5PFAj4LGMNjps7WZUPtQWBty';
const baseUrl = 'https://osf-digital-backend-academy.herokuapp.com/api/';
const axios = require('axios');

async function signin() {
    let res = await axios.get(baseUrl + '/auth/signin');
    return res.data;
}

module.exports = {signin};

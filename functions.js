const axios = require('axios');

const functions = {
  fetchUser_jsonplaceholder: () => {
    var endpoint = 'https://jsonplaceholder.typicode.com/users/1';
    return axios.get(endpoint).then( res => res.data ).catch( err => 'error');
  },
  dummyFunc: () => {
    return 5;
  },
  fetchUser_reqresin: () => {
    var endpoint = 'https://reqres.in/api/users/2';
    return axios.get(endpoint).then( res => res.data.data ).catch(err => 'error');
  },
}

module.exports = functions;

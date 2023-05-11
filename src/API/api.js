import axios from "axios";

const options = {
method: 'GET',
url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurant',
params: {locationId: '304554'},
headers: {
    'X-RapidAPI-Key': 'b29750d0bcmsha3fa8986d805330p134732jsn8e65ad484b57',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
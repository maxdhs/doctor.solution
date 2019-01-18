// import { Player } from "./player";

exports.apiKey = process.env.API_KEY;

let doctorName = "carlos";

let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ff63ee1b0ab5c21900d757d30010e4bb`;


let promise = new Promise(function (resolve, reject) {
  let request = new XMLHttpRequest();
  request.onload = function () {
    if (this.status === 200) {
      resolve(request.response);
    } else {
      reject(Error(request.statusText));
    }
  }
  request.open("GET", url, true);
  request.send();
});

promise.then(function (response) {
  let body = JSON.parse(response);
  console.log(body);
 
});



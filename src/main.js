// import { Player } from "./player";

const buttonDiv = document.getElementById("button");
const inputDiv = document.getElementById("userInput");
const outputDiv = document.getElementById("results");
buttonDiv.addEventListener("click", captureInput);

const buttonDiv2 = document.getElementById("button2");
const inputDiv2 = document.getElementById("userInput2");
const outputDiv2 = document.getElementById("results2");
buttonDiv2.addEventListener("click", captureInput2);

let userInput;
let userInput2;
exports.apiKey = process.env.API_KEY;

function captureInput() {
  userInput = inputDiv.value;

  let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ff63ee1b0ab5c21900d757d30010e4bb`;

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
    if (body.meta.total == 0) {
      outputDiv.innerHTML = "No doctors found.";
    }
    else {
      outputDiv.innerHTML = "Your found doctors: <br><br>";
      for (let i = 0; i < body.data.length; i++) {
        for (let j = 0; j < body.data[i].practices.length; j++) {
          outputDiv.innerHTML += "<li>" + body.data[i].practices[j].name + " <br>" + body.data[i].practices[j].visit_address.street + ", " + body.data[i].practices[j].visit_address.city + ", " + body.data[i].practices[j].visit_address.state + " " + "<br>Accepting new patients: " + body.data[i].practices[j].accepts_new_patients + "<br> Phone number:" + body.data[i].practices[j].phones[0].number + "<br> Website: " + body.data[i].practices[j].website + "<br><br></li>";
        }
      }
    }
  });

  promise.catch(function (error) {
    outputDiv.innerHTML = "API returned error: " + error;
  });

}

function captureInput2() {
  userInput2 = inputDiv2.value;

  let url = `https://api.betterdoctor.com/2016-03-01/practices?name=${userInput2}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ff63ee1b0ab5c21900d757d30010e4bb`;

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
    if (body.meta.total == 0) {
      outputDiv2.innerHTML = "No doctors found to treat your condition";
    }
    else {
      outputDiv2.innerHTML = "Doctors available to treat your condition: <br>";
      for (let i = 0; i < body.data.length; i++) {
        outputDiv2.innerHTML += "<li>" + body.data[i].name + " " + body.data[i].name + "</li>";
      }
    }
  });

  promise.catch(function (error) {
    outputDiv2.innerHTML = "API returned error: " + error;
  });
}

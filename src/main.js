import { API } from "./API";

// EVENT LISTENERS

const buttonDiv = document.getElementById("button");
const inputDiv = document.getElementById("userInput");

buttonDiv.addEventListener("click", captureInput);

const buttonDiv2 = document.getElementById("button2");
const inputDiv2 = document.getElementById("userInput2");

buttonDiv2.addEventListener("click", captureInput2);

let apiKey = process.env.exports.apiKey;

// CALLS TO API CLASS

function captureInput() {
 let userInput = inputDiv.value;
 let newAPI = new API (apiKey, userInput);
 newAPI.nameSearch();
}

function captureInput2() {
  let userInput = inputDiv2.value;
  let newAPI = new API (apiKey, userInput);
  newAPI.conditionSearch();
}

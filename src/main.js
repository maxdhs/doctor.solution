// import { Player } from "./player";


let monstersArr = ["Demon", "Evil", "enemy", "skeleton", "ghost", "zombie", "dwarf", "grudge"];
let monster = monstersArr[Math.floor(Math.random() * 9)];

const url = `https://pixabay.com/api/?key=11303173-11f0442832adac1d8b6ec4e16&q=${monster}&colors=transparent`;

let imgLink;


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
  console.log(process.env.API_KEY);
 

});

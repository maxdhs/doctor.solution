const outputDiv = document.getElementById("results");
const outputDiv2 = document.getElementById("results2");

export class API {

  constructor(apiKey, userInput) {
    this.apiKey = apiKey;
    this.userInput = userInput;
  }

  nameSearch() {

    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.userInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${this.apiKey}`;


    let promise = fetch(url);
    promise.then(resp => resp.json()).then(function (body) {
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

  conditionSearch() {

    let url = `https://api.betterdoctor.com/2016-03-01/practices?name=${this.userInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${this.apiKey}`;

    let promise = fetch(url);
    promise.then(resp => resp.json()).then(function (body) {
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
    })

  }
}
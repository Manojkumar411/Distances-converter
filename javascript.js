function convertToMiles() {
    let kmInput = document.getElementById('kmInput').value;
    let miles = kmInput * 0.621371; // 1 kilometer = 0.621371 miles
    document.getElementById('Answers').innerHTML = miles.toFixed(2);
  }
  
  function convertToKilometers() {
    let milesInput = document.getElementById('milesInput').value;
    let kilometers = milesInput / 0.621371; // 1 mile = 0.621371 kilometers
    document.getElementById('Answers').innerHTML = kilometers.toFixed();
  }
  
console.clear();

const url = "https://swapi.dev/api/people";

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // to log the entire data
      // to count the number of characters / JS objects of the fetched data
      const characterCount = data.results;
      console.log("Number of characters: ", characterCount);
      // all names of characters:
      console.log(
        data.results.forEach((character) => {
          console.log(character.name);
        })
      );
      //Bonus: eye color of R2-D2:
      const r2d2 = data.results.find((character) => character.name === "R2-D2");
      if (r2d2) {
        console.log(r2d2.eye_color);
      }
    });
}

fetchData();

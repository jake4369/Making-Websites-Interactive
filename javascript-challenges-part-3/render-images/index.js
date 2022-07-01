// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imgContainer = document.getElementById("container");

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

renderImages = function (arr) {
  arr.forEach(
    (el) =>
      (imgContainer.innerHTML += `<img src="${el}" alt="Employee avatar" class="team-img">`)
  );
};

renderImages(imgs);

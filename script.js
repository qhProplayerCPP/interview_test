const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
let button = document.getElementById('get-meal');

button.addEventListener('click', () => {
  document.getElementById('home').style['margin-top'] = '3rem';
  fetch(url)
    .then((resolve, reject) => {
      return resolve.json();
    })
    .then((data) => {
      let meals = data.meals[0];
      document.getElementById('image').src = meals.strMealThumb;
      document.getElementById('title').innerHTML = meals.strMeal;
      document.getElementById('script').innerHTML = meals.strInstructions;
      document.getElementById('category').innerHTML = 'Category: ' + meals.strCategory;
      document.getElementById('area').innerHTML = 'Area: ' + meals.strArea;
      document.getElementById('tags').innerHTML = 'Tags: ' + meals.strTags;
      document.getElementById('ingredients').style.display = 'block';
      document.getElementById('video').style.display = 'block';
      document.getElementById('player').style.display = 'block';
      let source_video = meals.strYoutube.replace('watch?v=', 'embed/');
      document.getElementById('player').src = source_video;
      let i = 1;
      let ingre = 'strIngredient';
      let measure = 'strMeasure';
      while (true) {
        let temp1 = ingre + i;
        let temp2 = measure + i;
        if (meals[temp1] == '') {
          break;
        }
        var node = document.createElement('LI');
        var textnode = document.createTextNode(`${meals[temp1]} - ${meals[temp2]}`);
        node.appendChild(textnode);
        document.getElementById('node-of-ingre').appendChild(node);
        i++;
      }
    });
});

function numGardens(arr) {
  return result;
}

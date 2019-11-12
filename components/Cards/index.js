// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// ## element created
function articleCreate(object) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const containerImg = document.createElement('div');
    const img = document.createElement('img');
    const about = document.createElement('span');

    // ### 
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    containerImg.classList.add("img-container");

    // ## Content Set
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    about.textContent = object.authorName;
     

    // ### append DOM 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(containerImg);
    containerImg.appendChild(img);
    author.appendChild(about);

    return card;
}


//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(arr =>{
    console.log(arr.data.articles)
   const cardsContainer = document.querySelector('.cards-container')

    articleKeys = Object.keys(arr.data.articles)

    articleKeys.forEach(element => {
      arr.data.articles[element].forEach(i => {
        cardsContainer.appendChild(articleCreate(i))
      })
    });
})
.catch(err => 
  console.log(err)) 
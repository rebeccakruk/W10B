let firstPTag = document.querySelector("p");
// font and style were changed after selecting the first p tag
firstPTag.style.fontFamily = `verdana`;
firstPTag.style.fontStyle = `italic`;

let headers = document.querySelectorAll(`h2`);
// all <h2> tags had text added to them
for (i = 0; i < headers.length; i++){
    headers[i].innerHTML += `  -- where they have the best beaches in the world!`;
}

let warmest = document.getElementById(`warmest`);
// nested image in p tag (id: warmest)
    warmest.innerHTML += `<img src="https://images.unsplash.com/photo-1542641734-3b824eaabad0" alt="indian ocean picture">`;

let exploremore = document.getElementById(`exploreMore`);
// a <p> tag in the original HTML was changed to a button with an a tag nested into it
exploremore.outerHTML = `<button><a href="https://www.audleytravel.com/ca/indian-ocean" target="_blank">Click me!</button>`;

let reasons = document.getElementsByClassName(`reasons`);
// a class name will give an array. Here I had to index it (starting at the beginning) in order to create the <h2> beforebegin.
reasons[0].insertAdjacentHTML(`beforebegin`, `<h2>Reasons to Visit the Indian Ocean</h2>`);


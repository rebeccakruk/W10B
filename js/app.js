let firstPTag = document.querySelector("p");
firstPTag.innerText = ("Hello world");

let allPTags = document.querySelectorAll("p");
for (let i = 0; i < allPTags.length; i++) {
    allPTags[i].innerText = `I am number: ${i+1}`;
}
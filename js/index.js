const questionOne = "What is the capital of India?";
const answerOne = "New Delhi";
const questionTwo = "What is the capital of USA?";
const answerTwo = "Washington DC";
const questionThree = "What is the capital of UK?";
const answerThree = "London";
const questionFour = "What is the capital of France?";
const answerFour = "Paris";
const questionFive = "What is the capital of Germany?";
const answerFive = "Berlin";
const homepageButton = document.querySelector(".homepage-button");
const profileButton = document.querySelector(".profile-button");
const bookmarkPageButton = document.querySelector(".bookmark-page-button");

homepageButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

profileButton.addEventListener("click", () => {
  window.location.href = "profile.html";
});

bookmarkPageButton.addEventListener("click", () => {
  window.location.href = "Bookmark.html";
});
const questionCards = document.querySelectorAll('[data-js="question-card"]');

questionCards.forEach((card) => {
  const showAnswerButton = card.querySelector('[data-js="show-answer-button"]');
  const answer = card.querySelector("[data-js='answer']");

  showAnswerButton.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      showAnswerButton.innerText = "Hide Answer";
    } else {
      answer.style.display = "none";
      showAnswerButton.innerText = "Show Answer";
    }
  });

  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmarked");
  });
});
const button = document.querySelector('[data-js="bookmark-button"]');
const svg = document.querySelector('[data-js="myImage"]');

button.addEventListener("click", function () {
  const currentColor = svg.querySelector("path").getAttribute("fill");
  if (currentColor === "#ffffff") {
    svg.querySelector("path").setAttribute("fill", "#000000");
  } else {
    svg.querySelector("path").setAttribute("fill", "#ffffff");
  }
});

const main = document.querySelector('[data-js="main"]');
const newCardOne = document.createElement("section");
newCardOne.classList.add("question-container");
newCardOne.innerHTML = `
<div class="question-card">
<div class="question">Question :</div>
<p>
  ${questionOne}
</p>
<div class="answer">
  ${answerOne}
  </div>
  <button class="show-answer-button" data-js="show-answer-button">Show Answer</button>
  <button class="bookmark-button" id="bookmark-button" data-js="bookmark-button">
          <svg data-js="myImage" id="myImage" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path id="Vector" d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
</section>
`;
const newBookmarkButton = newCardOne.querySelector(
  '[data-js="bookmark-button"]'
);
newBookmarkButton.addEventListener("click", () => {
  newBookmarkButton.classList.toggle("bookmarked");
});
const newCardTwo = document.createElement("section");
newCardTwo.classList.add("question-container");
newCardTwo.innerHTML = `
<div class="question-card">
<div class="question">Question :</div>
<p>
  ${questionTwo}
</p>
<div class="answer">
  ${answerTwo}
  </div>
  <button class="show-answer-button" data-js="show-answer-button">Show Answer</button>
  <button class="bookmark-button" id="bookmark-button" data-js="bookmark-button">
          <svg data-js="myImage" id="myImage" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path id="Vector" d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
</section>
`;
const newBookmarkButton1 = newCardTwo.querySelector(".bookmark-button");
newBookmarkButton.addEventListener("click", () => {
  newBookmarkButton.classList.toggle("bookmarked");
});
const newCardThree = document.createElement("section");
newCardThree.classList.add("question-container");
newCardThree.innerHTML = `
<div class="question-card">
<div class="question">Question :</div>
<p>
  ${questionThree}
</p>
<div class="answer">
  ${answerThree}
  </div>
  <button class="show-answer-button" data-js="show-answer-button">Show Answer</button>
  <button class="bookmark-button" id="bookmark-button" data-js="bookmark-button">
          <svg data-js="myImage" id="myImage" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path id="Vector" d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
</section>
`;
const newBookmarkButton2 = newCardTwo.querySelector(
  '[data-js="bookmark-button"]'
);
newBookmarkButton.addEventListener("click", () => {
  newBookmarkButton.classList.toggle("bookmarked");
});
main.append(newCardOne);
main.append(newCardTwo);
main.append(newCardThree);

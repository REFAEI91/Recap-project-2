const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((card) => {
  const showAnswerButton = card.querySelector(".show-answer-button");
  const answer = card.querySelector(".answer");

  showAnswerButton.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      showAnswerButton.innerText = "Hide Answer";
    } else {
      answer.style.display = "none";
      showAnswerButton.innerText = "Show Answer";
    }
  });

  const bookmarkButton = card.querySelector(".bookmark-button");

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmarked");
  });
});

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

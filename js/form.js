const addQuestion = document.querySelector('[data-js="textarea"]');
const addAnswer = document.querySelector('[data-js="textarea1"]');
const counterQuestion = document.querySelector('[data-js="counter-questions"]');
const counterAnswer = document.querySelector('[data-js="counter-answer"]');

addQuestion.addEventListener("input", function (event) {
  const target = event.target;

  // Get the `maxlength` attribute
  const maxLength = target.getAttribute("maxlength");

  // Count the current number of characters
  const currentLength = target.value.length;

  counterQuestion.innerHTML = `${currentLength}/${maxLength}`;
});

addAnswer.addEventListener("input", function (event) {
  const target = event.target;

  // Get the `maxlength` attribute
  const maxLength = target.getAttribute("maxlength");

  // Count the current number of characters
  const currentLength = target.value.length;

  counterAnswer.innerHTML = `${currentLength}/${maxLength}`;
});

const form = document.querySelector('[data-js="form"]');
const newQuestion = document.querySelector('[data-js="yourQuestionsList"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements);
  const li1 = document.createElement("li");
  li1.textContent =
    "Question: " +
    event.target.elements.addquestions.value +
    " --- Answer: " +
    event.target.elements.answer.value;
  "Tags: " + event.target.elements.tags.value;
  li1.classList.add("question-card");
  li1.innerHTML = `
<div class="question-card">
<div class="question">Question : ${event.target.elements.addquestions.value}</div>

<div >
  Answer :${event.target.elements.answer.value}
  </div>
`;
  const maxLength =
    event.target.elements.addquestions.getAttribute("maxlength");
  counterQuestion.innerHTML = `0/${maxLength}`;
  event.target.elements.answer.getAttribute("maxlength");
  counterAnswer.innerHTML = `0/${maxLength}`;
  newQuestion.append(li1);
  form.reset();
});

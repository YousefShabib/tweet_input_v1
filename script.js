const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const maxChars = 250;

tweetInput.addEventListener("input", () => {
  let inputLength = tweetInput.value.length;

  if (inputLength >= maxChars) {
    tweetInput.value = tweetInput.value.substring(0, maxChars);
    inputLength = maxChars;
    tweetInput.classList.add("limit-reached");
    charCount.classList.add("limit-reached-text");
  } else {
    tweetInput.classList.remove("limit-reached");
    charCount.classList.remove("limit-reached-text");
  }

  charCount.textContent = `${inputLength} / ${maxChars}`;
});

submitBtn.addEventListener("click", () => {
  if (tweetInput.value.length > maxChars) {
    alert("Your message exceeds the 250 character limit.");
  } else {
    alert("Message sent successfully!");
  }
});


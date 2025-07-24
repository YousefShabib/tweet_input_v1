const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const maxChars = 250;


tweetInput.addEventListener("input", () => {
  let inputLength = tweetInput.value.length;

  if (inputLength === 0) {
    submitBtn.classList.add("off");
    submitBtn.disabled = true;
  }
   else 
   {
    submitBtn.classList.remove("off");
    submitBtn.disabled = false;
  }

  if (inputLength >= maxChars) {
    tweetInput.value = tweetInput.value.substring(0, maxChars);
    inputLength = maxChars; // تحديث العد بعد القطع
    tweetInput.classList.add("limit-reached");
    charCount.classList.add("limit-reached-text");
  } 
  else {
    tweetInput.classList.remove("limit-reached");
    charCount.classList.remove("limit-reached-text");
  }

  charCount.textContent = `${inputLength} / ${maxChars}`;

});

submitBtn.addEventListener("click", () => {
  const length = tweetInput.value.length;

  if (length === 0) {
    submitBtn.classList.add("off");
    submitBtn.disabled = true;

  } 

  else if (length > maxChars) {
    alert("Your message exceeds the 250 character limit.");
  } 

  else {
    alert("Message sent successfully!");
    submitBtn.classList.add("off");
    submitBtn.disabled = true;
  }
});




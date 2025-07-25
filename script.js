const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const maxChars = 250;


function setSubmitButtonState(enabled) {
    if (enabled) {
      submitBtn.classList.remove("off");
      submitBtn.disabled = false;
    }
    else {
      submitBtn.classList.add("off");
      submitBtn.disabled = true;
    }
  }
  
  tweetInput.addEventListener("input", () => {
    if (tweetInput.value.length > maxChars) {
      tweetInput.value = tweetInput.value.substring(0, maxChars);
    }
  
    let inputLength = tweetInput.value.length;
  
    if (inputLength === 0) {
      setSubmitButtonState(false);
    }
    else {
      setSubmitButtonState(true);
    }
  
    if (inputLength >= maxChars) {
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
      setSubmitButtonState(false);
    }
  
    else if (length > maxChars) {
      alert("Your message exceeds the 250 character limit.");
    }
  
    else {
      alert("Message sent successfully!");
      setSubmitButtonState(false);
    }
    
  });




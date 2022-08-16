const form = document.getElementById("card-form");
const btn = document.getElementById("btn");

//reset the form while refreshing the browser
window.onload = () => form.reset();

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let cardNameValid = nameValidation();
  let cardNumberValid = numberValidation();
  let cardDateValid = dateValidation();
  let cardCvcValid = cvcValidation();
  if (cardNameValid && cardNumberValid && cardDateValid && cardCvcValid) {
    // console.log("Brillant!");
    thankyou();
  } else {
    oneMoreTime();
    // console.log("come on.. ");
  }
});

function oneMoreTime() {
  form.addEventListener("input", (evt) => {
    switch (evt.target.id) {
      case "name":
        nameValidation();
        break;
      case "number":
        numberValidation();
        break;
      case "exp-month":
        dateValidation();
        break;
      case "exp-year":
        dateValidation();
        break;
      case "card-cvc":
        cvcValidation();
        break;
    }
  });
}

const thankyou = () => {
  const thankCard = document.getElementById("thank-you");
  form.style.display = "none";
  thankCard.style.display = "block";
};

// show the error message under the input and add the error class
const showError = (ele, errorMsg) => {
  const formField = ele.parentElement;
  const errorDisplay = formField.querySelector("span");
  errorDisplay.textContent = errorMsg;
  formField.classList.add("error");
};

// set the error message to blank when the input value is validated and remove the error class
const isSuccess = (ele) => {
  const formField = ele.parentElement;
  const errorDisplay = formField.querySelector("span");
  errorDisplay.textContent = "";
  formField.classList.remove("error");
};

// check if there's an input value
const valueCheck = (value) => (value == "" || value == null ? false : true);
// check if the input number is legitimate
const lengthCheck = (length, min, max) =>
  length < min || length > max ? false : true;
// check if the input number matches the right length number
const matchLength = (length, num) =>
  length > num || length < num ? false : true;
// check if the input value only contains letters, return with the test result (boolean)
const onlyLetters = (value) => {
  const reg = /^[A-Za-z\s]*$/g;
  return reg.test(value);
};
// check if the input value only contains digits, return with the test result (boolean)
const onlyDigits = (value) => {
  const reg = /^[0-9\s]*$/g;
  return reg.test(value);
};

const nameValidation = () => {
  const cardName = document.getElementById("card-name");
  const inputName = document.getElementById("name");
  //Remove whitespace from both ends of a string and return a new string
  const inputName_value = inputName.value.trim();
  let valid = false;
  const min = 6,
    max = 30;
  //If the input is empty, show the error message
  if (!valueCheck(inputName_value)) {
    showError(inputName, "Please enter your name");
    // if the input length doesn't respect the min and max or if the input contains special characters or numbers, show the error msg.
  } else if (
    !lengthCheck(
      inputName_value.length,
      min,
      max || !onlyLetters(inputName_value)
    )
  ) {
    showError(inputName, "Wrong format, letters only");
  } else {
    // else, set the input to success and set the valid to true; display the input value to the card.
    isSuccess(inputName);
    cardName.textContent = inputName_value;
    return true;
  }
};

const numberValidation = () => {
  const cardNumber = document.getElementById("card-number");
  const inputNumber = document.getElementById("number");
  const inputNumber_value = inputNumber.value.trim();
  //remove the whitespace between numbers
  const inputNumber_value_net = inputNumber.value.replace(/\s/g, "").length;
  const cardNum = 16;
  if (!valueCheck(inputNumber_value)) {
    showError(inputNumber, "Please enter your number");
  } else if (
    !matchLength(inputNumber_value_net, cardNum) ||
    !onlyDigits(inputNumber_value)
  ) {
    showError(inputNumber, "Wrong format, numbers only");
  } else {
    isSuccess(inputNumber);
    //first remove the whitespace, then set the numbers to 4 digits a group
    inputNumber.value = inputNumber_value
      .replace(/\s*/g, "")
      .replace(/(.{4})/g, "$1 ");
    cardNumber.textContent = inputNumber.value;
    return true;
  }
};

const dateValidation = () => {
  const monthMin = 1,
    monthMax = 12,
    yearMin = 22,
    yearMax = 32;
  const cardMonth = document.getElementById("card-month");
  const inputMonth = document.getElementById("exp-month");
  const cardYear = document.getElementById("card-year");
  const inputYear = document.getElementById("exp-year");
  const inputMonth_value = inputMonth.value.trim();
  const inputYear_value = inputYear.value.trim();
  if (!valueCheck(inputMonth_value) || !valueCheck(inputYear_value)) {
    showError(inputMonth, "Can't be blank");
  } else if (
    !lengthCheck(parseInt(inputMonth_value), monthMin, monthMax) ||
    !lengthCheck(parseInt(inputYear_value), yearMin, yearMax) ||
    !onlyDigits(inputMonth_value) ||
    !onlyDigits(inputYear_value)
  ) {
    showError(inputYear, "Wrong format, numbers only");
  } else {
    cardMonth.textContent = inputMonth_value;
    cardYear.textContent = inputYear_value;
    isSuccess(inputMonth, inputYear);
    return true;
  }
};

const cvcValidation = () => {
  const inputCVC = document.getElementById("cvc");
  const cardCVC = document.getElementById("card-cvc");
  const num = 3;
  const inputCVC_value = inputCVC.value.trim();
  const inputCVC_value_len = inputCVC_value.length;
  if (!valueCheck(inputCVC_value)) {
    showError(inputCVC, "Can't be blank");
  } else if (
    !matchLength(inputCVC_value_len, num) ||
    !onlyDigits(inputCVC_value)
  ) {
    showError(inputCVC, "Wrong format, numbers only");
    console.log(inputCVC_value_len);
  } else {
    isSuccess(inputCVC);
    cardCVC.textContent = inputCVC_value;
    return true;
  }
};

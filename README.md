Show me your card details  ↑_(ΦwΦ;)Ψ

# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page


### Screenshot

- focus states with the linear gradient border
  <img src="./images/Screenshots/Focus"  width="600px">

- when the input value isn't the rigth format
  <img src="./images/Screenshots/Wrong"  width="600px">

- after correcting the value
  <img src="./images/Screenshots/Correct"  width="600px">

- thank you card after sucessfully submitted the form
  <img src="./images/Screenshots/Complete"  width="600px">

### Links

- [Github repo](https://github.com/boba-milktea/interactive-card-details.git)
- [Github page ](https://boba-milktea.github.io/interactive-card-details/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

For month and year label and input, I used the fieldset and legend tags.

```html
<fieldset><legend></legend></fieldset>
```

How to hide lables visually but keep it readable to screen reader. Reference at [Useful resources](#useful-resources).

```css
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

Use `float` to change the position of legend as `postion` or `display` won't work.

First time using Conditional (ternary) operator

```js
const valueCheck = (value) => (value == "" || value == null ? false : true);
```

### Continued development

- This interactive card is designed for mobile and desktop screens. Should add the tablet screen resolutions to @media.

- Not satified with the layout.

### Useful resources

- [Linear Gradient border article by Nikita Hlopov](https://nikitahl.com/gradient-border-css) - All methods and workaround to crater a linear gradient border. Very good article.
- [Linear Gradient border example](https://codyhouse.co/nuggets/css-gradient-borders)
- [Regex website](https://regexr.com/) - very useful when writing regular expressions.
- [How to hide labels visually](https://www.w3.org/WAI/tutorials/forms/labels/)
- [Client side form validation tutorial](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - up to date content, using arrow functions and ternary operators.

## Author

- Frontend Mentor - [@boba-milktea](https://www.frontendmentor.io/profile/boba-milktea)

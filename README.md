# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Demo screenshot](screenshot.png)

### Links

- Solution URL: [My Solution](https://www.frontendmentor.io/solutions/responsive-expenses-chart-2q9v1t-QRA)
- Live Site URL: [Live demo](https://mohamed-devp.github.io/expenses-chart-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

While working in this project i learned how to create cool looking animations using `transition` and `transition-delay` css properties.


```css
  .bar {
    transition: all .2s ease-in;
  }
```

```js
  bar.style.height = `${amount / maxAmount * 100}%`;
  bar.style.transitionDelay = `${delay}s`;

  delay += 0.1;
```
## Author

- Frontend Mentor - [@Mohamed-Devp](https://www.frontendmentor.io/profile/Mohamed-Devp)
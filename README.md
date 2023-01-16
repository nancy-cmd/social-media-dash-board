# social-media-dash-board
This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- Toggle color theme to their preference

### Screenshot


![light-mode](https://user-images.githubusercontent.com/64009266/212660023-6800527e-75d3-4ee0-867e-b39c06a92d27.jpeg)
![dark-mode](https://user-images.githubusercontent.com/64009266/212660124-78ce8511-4f78-4b88-8fac-cfa444f70dd0.jpeg)
![mobile-version](https://user-images.githubusercontent.com/64009266/212660175-62e9690c-e113-4574-b0aa-7082d4442719.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This project was a bit challeging at first, i still don't think its as perfect as i would like it to be but i guess as i keep learning i will keep adding and changing the code. CSS grid was a bit tricky and there are some aspects of it i still don't fully understand but will keep learning. 

These are some code snippets i liked:

```html
<label class="switch">
                <input type="checkbox">
                <span id="toggle" class="slider round" onclick="switchTheme()"></span>
            </label>
```
```css
.proud-of-this-css {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 25px;
}
```
```js
const proudOfThisFunc = () => {
  console.log('const currentTheme = localStorage.getItem('toggle') || 'light';')
}
```


### Continued development

I really want to continue learning more about CSS grid, i also want to get comfortable using other responsive layouts other than just media queries.

### Useful resources

- [Example resource 1](https://youtu.be/0QJP5-Hyndw) - This helped me figure out how to create a toggle switch, although i used JS as well, I really liked this pattern and will use it going forward.
- [Example resource 2](https://youtu.be/k3YHfp8Bp_E) - This tutorial helped me get a better understanding of css grid . I'd recommend it to anyone still learning this concept.


## Author

- Website - [Nancy](https://www.nancyec.com)
- Frontend Mentor - [@nancy-cmd](https://www.frontendmentor.io/profile/nancy-cmd)



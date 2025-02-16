# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I wanted to practise my frontend skills a bit and use these projects to increase my proficiency with certain libraries

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
- View the optimal layout for the interface depending on their device's screen size

### Screenshot
![screencapture-localhost-5173-2025-02-16-00_22_50](https://github.com/user-attachments/assets/d521d93b-3fe2-418f-8d94-8f6c70434e8f)

### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://bento-grid-1cagx23uo-lorenzojokhans-projects.vercel.app/

## My process

### Built with
- Semantic HTML5 markup
- Flexbox
- Grid
- [React](https://reactjs.org/) - React library
- [React-router 7](https://reactrouter.com/)- React create tool is deprecated and react pushes frameworks now
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned
I have used grid often before, but never had the opertunity to create a masonry like grid.
This was the first time trying out the grid-template-areas css property.
It is very efficient when the nr and layout of the rows are known beforehand and do not have to be dynamic.
```css
 .grid-container {
    display: grid;
    grid-template-areas:
    "A B B C"
    "A E F C"
    "D E F C"
    "D G H H";
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 0.5fr 1fr 0.5fr;
    height: 800px;
    max-width: 1020px;
    gap: 25px;
  }
```

### Continued development
One part that i found difficult was to make the build generated by react-router to work in github pages, i have not yet found a way to do this. Some forums talked about using hashRouter, but the documentation of react-router V7 is not clear on how to override the default router.
One way to circumvent this problem was to deploy it on vercel.

### Useful resources
- [Css-tricks](https://css-tricks.com/almanac/properties/g/grid-area/) - This helped me to gain a better understanding of the grid-area property and its usages.

## Author

- Website - [Lorenzo Jokhan](Site Not yet available)
- Frontend Mentor - [@LorenzoJokhan](https://www.frontendmentor.io/profile/LorenzoJokhan)

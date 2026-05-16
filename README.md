# Frontend Mentor - Manage landing page solution

This is my solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). This project provided a great opportunity to reinforce responsive React development and UI best practices.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider on mobile/tablet, and as a grid on desktop
- Receive an error message when the newsletter sign-up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Links

- Solution URL: [Add your solution URL here](https://your-solution-url.com)
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Swiper](https://swiperjs.com/) for testimonial slider
- Conditional rendering and form validation with React

### What I learned

- How to architect reusable React components (such as FeatureCard, TestimonialCard, Layout, Header, Footer)
- Implemented a pixel-perfect responsive design by following a Figma/sketch and using relative CSS units
- Used Swiper for a mobile-friendly, accessible testimonial carousel that switches to grid layout on desktop
- Validated form input with custom error messages
- Improved CSS organization using BEM and modular structure

#### Example code snippet:

```jsx
<form onSubmit={handleSubmit}>
  <input
    type="email"
    value={email}
    onChange={handleChange}
    placeholder="Updates in your inbox…"
    required
  />
  <button type="submit">Go</button>
  {error && <span className="error">{error}</span>}
</form>
```

### Continued development

- Would like to explore more animation on section transitions
- Could add unit tests for form validation and slider logic
- Try deploying with different hosting (Vercel, Netlify, etc.)

### Useful resources

- [Frontend Mentor Community](https://www.frontendmentor.io/forums)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [SwiperJS Documentation](https://swiperjs.com/react)
- [React Docs](https://react.dev/)

### AI Collaboration

I leveraged GitHub Copilot to help brainstorm layout structure, generate CSS utility snippets, and troubleshoot responsive issues. These tools assisted in breaking down the page into reusable, manageable React components and improving code readability.

## Author

- GitHub - [@ruqiash12-oss](https://github.com/ruqiash12-oss)
- Frontend Mentor - [@ruqiash12-oss](https://www.frontendmentor.io/profile/ruqiash12-oss)


## Acknowledgments

Thanks to the Frontend Mentor community for feedback, and to the maintainers of Swiper and React for their great documentation and tools.
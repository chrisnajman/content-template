# Content `template`

The HTML `<template>` tag allows developers to define reusable HTML structures that are not immediately rendered on the page. In this project, JavaScript clones the contents of the `<template>` tag and dynamically inserts user data into the DOM, making it an efficient way to generate multiple elements without unnecessary reflows.

[View on GitPage](https://chrisnajman.github.io/content-template)

---

## HTML

The `<template>` tag is a special HTML element used to store HTML structures that are not rendered until they are explicitly added to the document using JavaScript. This allows for improved performance and modularity when dynamically inserting content.

This project also makes use of **data attributes** (`data-*`), which provide a way to embed custom data into HTML elements. These attributes serve as placeholders within the `<template>`, allowing JavaScript to locate and update specific content dynamically. For example, attributes like `data-id`, `data-name`, and `data-address-city` make it easier to insert user-related information into the appropriate elements.

---

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `users.js`: This module fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`), processes the JSON response, and dynamically populates the list using the HTML `<template>` tag. It clones the template for each user, assigns relevant data to placeholders, and appends the completed elements to the DOM.

  The script makes extensive use of **data attributes** to insert user data into the appropriate elements. It selects elements using `querySelector("[data-*]")` and updates their text content accordingly. Additionally, the `.dataset` property is used to set a custom `data-item-id` attribute for each user, making it possible to track individual items dynamically.

- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## JSON

The **JSON** is sourced from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).

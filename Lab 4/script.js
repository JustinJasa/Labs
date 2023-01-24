let forms = document.querySelectorAll("form");
let headings = document.querySelectorAll("h1");

// hide all besides title of cards
forms.forEach((form) => {
  form.classList.add("hidden");
});

headings.forEach((heading, index) => {
  heading.addEventListener("click", () => {
    forms.forEach((form) => {
      form.classList.add("hidden");
    });
    forms[index].classList.remove("hidden");
  });
});

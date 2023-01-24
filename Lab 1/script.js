// Write your JavaScript code here that populates #tableOfContents with a <ul> which in turn contains one <li> for each <h2> below.
// Want a harder challenge? Put <a> in <li> that leads to the <h2>.
// Want a harder challenge? Add a button one can click to toggle the visibility of the table of contents.

let subHeadings = document.querySelectorAll("h2");
let heading = document.querySelector("h1");
let tableOfContents = document.createElement("ul");
document.getElementById("tableOfContents").appendChild(tableOfContents);

subHeadings.forEach((heading) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${heading.id}`;
  link.textContent = heading.textContent;
  item.appendChild(link);
  tableOfContents.appendChild(link);
});

let button = document.createElement("button");
button.innerText = "show";
document.getElementById("tableOfContents").appendChild(button);

button.addEventListener("click", () => {
  if (tableOfContents.getAttribute("class") === "hidden") {
    tableOfContents.setAttribute("class", "");
    button.innerHTML = "Hide";
  } else {
    tableOfContents.setAttribute("class", "hidden");
    button.innerHTML = "Show";
  }
});

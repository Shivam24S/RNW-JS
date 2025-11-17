// document.querySelector("#heading").textContent =
//   "this is dom manipulated by js";

// document.querySelector("#heading").innerHTML =
//   "<h5>this is dom manipulated by js also tag</h5>";

//   querySelectorAll

const headings = document.querySelectorAll(".heading");

for (h of headings) {
  h.textContent = "changed";
}

// headings.forEach((ele) => (ele.textContent = "heading changed"));

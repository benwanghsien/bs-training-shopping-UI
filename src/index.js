import "./index.scss";
import "bootstrap";

// toggle pagination btn CSS style
const paginationBar = document.querySelector("#paginationBar");
const paginationList = [].slice.call(paginationBar.children);

const paginationPrev = paginationList[0];
const paginationPost = paginationList[paginationList.length - 1];

let currentPage = 1;

paginationPrev.addEventListener("click", (e) => {
  if (currentPage === 1) {
    e.preventDefault();
  } else {
    paginationList[currentPage].classList.remove("active");
    currentPage--;
    paginationList[currentPage].classList.add("active");
  }
});

paginationPost.addEventListener("click", (e) => {
  if (currentPage === paginationList.length - 2) {
    e.preventDefault();
  } else {
    paginationList[currentPage].classList.remove("active");
    currentPage++;
    paginationList[currentPage].classList.add("active");
  }
});

paginationList.forEach((btn, index, array) => {
  if (index !== 0 && index !== array.length - 1) {
    btn.addEventListener("click", (e) => {
      if (index !== currentPage) {
        btn.classList.add("active");
        paginationList[currentPage].classList.remove("active");
        currentPage = index;
      }
    });
  }
});

// search click event, show loading layout
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  const loadingDiv = document.querySelector("#loading-wrapper");
  const itemsDiv = document.querySelector("#items-wrapper");
  itemsDiv.classList.add("d-none");
  loadingDiv.classList.remove("d-none");
  // Loading Layout timer
  setTimeout(() => {
    loadingDiv.classList.add("d-none");
    itemsDiv.classList.remove("d-none");
  }, 1200);
});

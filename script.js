const body = document.querySelector("body")
const sidebar = body.querySelector(".sidebar")
const toggleBtn = body.querySelector(".toggleBtn")
const searchBtn = body.querySelector(".search-box")

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close")
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close")
    document.querySelector("input").focus();
})
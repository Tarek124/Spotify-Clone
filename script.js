const search_div = document.getElementById("search_div");
const input = document.getElementById("input");

input.addEventListener('mouseenter', function () {
    search_div.style.cssText = `border: 1px solid #c9c0c0;`
})
input.addEventListener('mouseout', function () {
    search_div.style.cssText = `border: none;`
})




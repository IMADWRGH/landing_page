const img = document.querySelector(".img");
const container = document.querySelector(".container");
function updateImg(srcs) {
    img.src = srcs;
    console.log(srcs)
}

function updateBg(bg) {
    container.style.background = bg;
}
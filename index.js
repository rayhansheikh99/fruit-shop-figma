
const openModalBtn = document.querySelectorAll(".open-modal")
console.log(openModalBtn)
const modal = document.getElementById("modal")
const closeMOdalBtn = document.getElementById("close-modal")


closeMOdalBtn.addEventListener('click', () => {
    modal.classList.remove('show')
});



const openModal = function() {
    modal.classList.add("show")
}

for(let i = 0; i< openModalBtn.length; i++) {
    openModalBtn[i].addEventListener("click", openModal)
}

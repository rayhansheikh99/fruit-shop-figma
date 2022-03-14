// modal js 
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

// side navbar js 
const toggleIcon = document.getElementById('toggleIcon');
const sidemenu = document.getElementById('sidemenu');
const openMenu = document.getElementById('openMenu');
toggleIcon.addEventListener('click', () => {
    sidemenu.classList.toggle('collapseMenu');
    document.querySelectorAll('.toggleMenu').forEach(function(element) {
        element.classList.remove('toggleMenu');
    });
});
const arrow = document.querySelectorAll('.fa-angle-down');
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', e => {
        e.target.classList.toggle('changeDirection');
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('toggleMenu');
    });
}
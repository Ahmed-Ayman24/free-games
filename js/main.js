import { Details } from "./details.js";
import { Games } from "./games.js";
import { Ui } from "./ui.js";
let category;
let myCategory;
let gamesData;

(async function () {
    myCategory = new Games("mmorpg");
    gamesData = await myCategory.getGames();
    new Ui(gamesData).display();
    attachEventListener();
})();

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener('click', async function (event) {

        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        category = event.target.getAttribute("data-category");
        myCategory = new Games(category);
        gamesData = await myCategory.getGames();
        new Ui(gamesData).display();
        attachEventListener();
    })
});
function attachEventListener() {
    const card = document.querySelectorAll('.card');
    card.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const gameId = card.getAttribute("game-id");
            document.querySelector("#UiGames").classList.add("d-none")
            new Details(gameId).getDetails();
        })
    })
}

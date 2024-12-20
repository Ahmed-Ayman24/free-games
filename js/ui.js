export class Ui {
  constructor(gamesData) {
    this.gamesData = gamesData;
  }

  display() {
    let gameCard = ""

    for (let index = 0; index < this.gamesData.length; index++) {
      const game = this.gamesData[index];
      gameCard += `
        <div class="col">
            <a class="card bg-dark text-white h-100 text-decoration-none" game-id="${game.id}">
              <img
                src="${game.thumbnail}"
                class="card-img-top p-3"
                alt="game-thumbnail"
              />
              <div class="card-body p-0 my-3 text-center mt-0 px-3">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title comfortaa fw-semibold">
                    ${game.title}
                  </h5>
                  <div
                    class="price d-flex flex-column justify-content-center comfortaa rounded-2 px-2 py-1"
                  >
                    <p class="p-0 m-0">Free</p>
                  </div>
                </div>
                <p class="card-text text-white-50 comfortaa fs-10 mt-2">
                  ${game.short_description}
                </p>
              </div>
              <div
                class="card-footer py-1 d-flex justify-content-between fs-10 "
              >
                <div
                  class="bg-black bg-opacity-50 rounded text-white-50 px-2 comfortaa"
                >
                  ${game.genre}
                </div>
                <div
                  class="bg-black bg-opacity-50 rounded text-white-50 px-2 comfortaa"
                >
                 ${game.platform}
                </div>
              </div>
            </a>
          </div>
        `
    }
    document.querySelector("#showGames").innerHTML = gameCard
  }
}

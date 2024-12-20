export class Details {
    constructor(gameId) {
        this.gameId = gameId;
    }
    async getDetails() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3fe9685e1cmshbd1c170aeec015bp1b8c0djsn6a61f2b2b8f6',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`, options);
            document.getElementById("loading").classList.remove("d-none")
            const response = await api.json();
            document.getElementById("loading").classList.add("d-none")
            const gameDetails = `
           <div id="detailsContainer" class="container position-absolute top-0 bottom-0 start-0 end-0 z-3 bg-dark">
        <header class="hstack justify-content-between">
          <h1 class="text-center h3 py-4">Details Game</h1>
          <button class="btn-close btn-close-white" id="btnClose"></button>
        </header>
        <div class="row g-4" id="detailsContent">
          <div class="col-md-4">
            <img
              src="${response.thumbnail}"
              class="w-100"
              alt="image details"
            />
          </div>
          <div class="col-md-8">
            <h3>Title: ${response.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${response.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${response.status}</span></p>
            <p class="small">
              ${response.description}
            </p>
            <a
              class="btn btn-outline-warning"
              target="_blank"
              href="${response.game_url}"
              >Show Game</a
            >
          </div>
        </div>
      </div>
           `
            document.querySelector("#showDetails").innerHTML = gameDetails;
            document.getElementById('btnClose').addEventListener('click', () => {
                document.getElementById('detailsContainer').remove();
                document.querySelector("#UiGames").classList.remove("d-none")
            });
        } catch (error) {
            console.log(error)
            console.log("error")
        }
    }
}

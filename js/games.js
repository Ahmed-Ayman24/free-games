export class Games {
    constructor(category) {
        this.category = category
    }

    getCategory() {
        return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`
    }
    async getGames() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3fe9685e1cmshbd1c170aeec015bp1b8c0djsn6a61f2b2b8f6',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const api = await fetch(this.getCategory(), options);
            document.getElementById("loading").classList.remove("d-none")
            const response = await api.json();
            document.getElementById("loading").classList.add("d-none")
            return response;

        } catch (error) {
            console.log(error)
            console.log("error")
        }
    }
}
let allGames = [];

const renderGames = (listOfGames) => {
    const container = document.querySelector("#games-container");
    container.innerHTML = "";

    if (listOfGames.length === 0) {
        document.querySelector("#status").innerHTML = "<p>No games found!</p>";
        return;
    }

    document.querySelector("#status").innerHTML = "";

    listOfGames.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <h3>${game.title}</h3>
            <img src="${game.thumbnail}" alt="${game.title}">
            <p>${game.short_description}</p>
            <p>Genre: ${game.genre}</p>
            <p>Platform: ${game.platform}</p>
            <p>Release Date: ${game.release_date}</p>
        `;

        container.appendChild(card);
    });
};
const fetchGames = async () => {
    const response = await fetch("https://www.freetogame.com/api/games");
    const result = await response.json();
    allGames = result;
    renderGames(allGames);
};

const genreInput = document.querySelector("#genre-input");
genreInput.addEventListener("input", () => {
    const genre = genreInput.value.toLowerCase();
    const filtered = allGames.filter(game => 
        game.genre.toLowerCase().includes(genre)
    );
    renderGames(filtered);
});

let sorted = false;
const sortBtn = document.querySelector("#sort-btn");
sortBtn.addEventListener("click", () => {
    sorted = !sorted;
    if (sorted) {
        renderGames([...allGames].sort((a, b) => 
            a.title.localeCompare(b.title)
        ));
    } else {
        renderGames(allGames);
    }
});

fetchGames();
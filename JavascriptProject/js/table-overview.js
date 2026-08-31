const games = [];

const toString = (game) => {
    return `${game.name} (${game.type}) - Rating: ${game.rating} - Favorite: ${game.isFavourite}`;
};

const renderGames = (filterFunction) => {
    const listOfGames = games.filter(filterFunction);
    const tbody = document.querySelector("#table-tbody");
    tbody.innerHTML = "";
    const table = document.querySelector("table");
    const statusDiv = document.querySelector("#status");
    if (listOfGames.length === 0) {
        table.style.display = "none";
        statusDiv.innerHTML = "<h3>Status</h3><p>No games in library</p>";
        return;
    };
    table.style.display = "table";
    statusDiv.innerHTML = "<h3>Status</h3>";
    listOfGames.forEach(game => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.innerHTML = game.name;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.innerHTML = game.type;
        row.appendChild(typeCell);

        const ratingCell = document.createElement("td");
        ratingCell.innerHTML = game.rating;
        row.appendChild(ratingCell);

        row.addEventListener("click", () => {
            const statusDiv = document.querySelector("#status");
            statusDiv.innerHTML = `<h3>Status</h3><p>${toString(game)}</p>`;
        });

        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#f0f0f0";
        });

        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
        });

        row.addEventListener("dblclick", () => {
            toggleFavourite(game);
        });

        const deleteCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => {
        deleteGame(game);
        });
deleteCell.appendChild(deleteBtn);
row.appendChild(deleteCell);

        tbody.appendChild(row);
    });
};

const createColor = () => {
    const number = Math.floor(Math.random() * 360);
    return `hsl(${number}, 100%, 50%)`;
};

const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.color = createColor();
});

const  showFavouritesBtn =  document.querySelector("#show-favourites");
const showAllBtn = document.querySelector("#show-all");

showFavouritesBtn.addEventListener("click", () => {
    renderGames(game => game.isFavourite);
});

showAllBtn.addEventListener("click", () => {
    games.length = 0;
    fetchAndRenderGames();
});

const ratingInput = document.querySelector("#rating-input");
ratingInput.addEventListener("input", () => {
    const rating = parseFloat(ratingInput.value);
    renderGames(game => game.rating > rating);
});

const searchByFetch = async (chars) => {
    games.length = 0;
    const response = await fetch(`http://localhost:3000/games?query=${chars}`);
    const result = await response.json();
    games.push(...result);
};

const searchByFetchAndRender = async () => {
    const chars = document.querySelector("#search-input").value;
    await searchByFetch(chars);
    renderGames(game => true);
};

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
    searchByFetchAndRender();
});

const toggleFavourite = async (game) => {
    await fetch(`http://localhost:3000/games/${game.id}/favourite`, {
        method: "POST",
    });
    addStatus(`The game with name ${game.name} is now (not) my favourite!`);
    games.length = 0;
    await fetchAndRenderGames();
};
    const deleteGame = async (game) => {
    await fetch(`http://localhost:3000/games/${game.id}`, {
        method: "DELETE"
    });
    addStatus(`The game with name ${game.name} is now deleted.`);
    games.length = 0;
    await fetchAndRenderGames();
};

const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/games");
    const result = await response.json();
    games.push(...result);
};

const fetchAndRenderGames = async () => {
    await fetchGames();
    renderGames(game => true);
};

fetchAndRenderGames();

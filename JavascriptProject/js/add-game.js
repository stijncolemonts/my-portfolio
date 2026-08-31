const addGame = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const type = document.querySelector("#type").value;
    const rating = document.querySelector("#rating").value;

    if (!name || !type || !rating) {
        addStatus("No empty values allowed!");
        return;
    }
    if (name.length < 2 || name.length > 64) {
        addStatus("Name must be between 2 and 64 characters!");
        return;
    }
    if (rating < 0 || rating > 10) {
        addStatus("Rating must be between 0 and 10!");
        return;
    }
    const game = { 
        name: name, 
        type: type, 
        rating: parseFloat(rating) 
    };

    const response = await fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    });

    const result = await response.text();
    addStatus(`Game added: ${result}`);
    games.length = 0;
    await fetchAndRenderGames();
};

const form = document.querySelector("#add-game-form");
form.addEventListener("submit", addGame);